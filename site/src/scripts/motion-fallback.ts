/**
 * Motion fallback for browsers without native scroll-driven animations.
 *
 * This module is dynamically imported by <MotionRuntime />, and only after that
 * component has checked `CSS.supports('animation-timeline: view()')` and the
 * reduced-motion preference. In a browser that supports the CSS, this file is
 * never requested — it costs those visitors nothing at all.
 *
 * It does two jobs:
 *
 *   1. Reveals — one IntersectionObserver adds `.in-view` to `.fx-*` elements.
 *      Elements already on screen are revealed immediately and never armed, so
 *      nothing that was visible can flash out and back in.
 *
 *   2. The 3D box — one rAF-throttled scroll handler writes a 0–1 progress
 *      value to a single custom property on the section.
 *
 * ── Why the scroll handler never touches layout ──────────────────────────────
 * Reading `getBoundingClientRect()` while scrolling forces the browser to flush
 * pending style and layout work on the critical path, which is exactly how a
 * scroll effect turns into jank. Instead the track's geometry is measured once
 * and re-measured only on resize; the frame loop reads `window.scrollY` (a
 * cached scalar, not a layout read) and writes one custom property. No reads
 * and writes are interleaved.
 */

const REVEAL_SELECTOR = '.fx-fade-up, .fx-fade-in, .fx-scale-in, .fx-stagger > *';

/* ── 1. Reveals ─────────────────────────────────────────────────────────── */

function initReveals(): void {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
  if (!elements.length) return;

  const viewportHeight = window.innerHeight;

  // One batched measuring pass before anything is written, so arming the
  // off-screen elements cannot trigger a second layout per element.
  const offScreen = elements.filter((el) => el.getBoundingClientRect().top > viewportHeight * 0.9);
  if (!offScreen.length) return;

  for (const el of offScreen) el.classList.add('fx-armed');

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    },
    // A negative bottom margin holds the reveal until the element is properly
    // on screen rather than firing on the first pixel.
    { rootMargin: '0px 0px -12% 0px', threshold: 0 }
  );

  for (const el of offScreen) observer.observe(el);
}

/* ── 2. Scroll-rotating box ─────────────────────────────────────────────── */

function initBox(): void {
  const track = document.querySelector<HTMLElement>('[data-box3d]');
  if (!track) return;

  // Below the mobile breakpoint the 3D box is not rendered at all — a static
  // image stands in its place — so there is nothing to drive.
  const wide = window.matchMedia('(min-width: 48em)');

  let top = 0;
  let travel = 1;
  let ticking = false;
  let running = false;

  function measure(): void {
    const rect = track!.getBoundingClientRect();
    top = rect.top + window.scrollY;
    // The sticky pane is one viewport tall, so the distance the section spends
    // pinned is its own height less that pane.
    travel = Math.max(1, rect.height - window.innerHeight);
  }

  function frame(): void {
    ticking = false;
    // window.scrollY is a cached scalar. Nothing here reads layout.
    const progress = Math.min(1, Math.max(0, (window.scrollY - top) / travel));
    track!.style.setProperty('--box3d-p', progress.toFixed(4));
  }

  function onScroll(): void {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(frame);
  }

  function start(): void {
    if (running || !wide.matches) return;
    running = true;
    measure();
    // will-change is applied only while the section is on screen, and dropped
    // the moment it leaves. Leaving it on permanently keeps a compositor layer
    // alive for a box nobody is looking at.
    track!.classList.add('is-active');
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function stop(): void {
    if (!running) return;
    running = false;
    track!.classList.remove('is-active');
    window.removeEventListener('scroll', onScroll);
  }

  const visibility = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) (entry.isIntersecting ? start : stop)();
    },
    { rootMargin: '20% 0px' }
  );
  visibility.observe(track);

  window.addEventListener(
    'resize',
    () => {
      if (!running) return;
      measure();
      onScroll();
    },
    { passive: true }
  );

  wide.addEventListener('change', () => {
    if (!wide.matches) stop();
  });
}

initReveals();
initBox();
