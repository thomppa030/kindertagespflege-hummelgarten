<script>
  import { onMount } from 'svelte';
  import { flip } from 'svelte/animate';
  import { cubicOut } from 'svelte/easing';

  export let images = [];

  let featuredIndex = 0;
  let loadedImages = new Set();

  // Hover-intent delay: a tile only becomes featured after the cursor
  // rests on it briefly, so passing across the grid doesn't trigger a
  // burst of instant reflows.
  const HOVER_INTENT_MS = 140;
  let hoverTimer;

  const handleImageHover = (index) => {
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
      featuredIndex = index;
    }, HOVER_INTENT_MS);
  };

  const handleImageLeave = () => {
    clearTimeout(hoverTimer);
  };

  // Keyboard focus should feature a tile immediately — the hover-intent
  // delay exists to filter incidental mouse movement, not deliberate tabbing.
  const handleImageFocus = (index) => {
    clearTimeout(hoverTimer);
    featuredIndex = index;
  };

  const handleImageLoad = (index) => {
    loadedImages.add(index);
    loadedImages = loadedImages; // Trigger reactivity
  };

  // Svelte action: covers the case where the image is already complete
  // (served from cache) by the time this element mounts, since the
  // browser's `load` event never fires again for an already-loaded image.
  const markLoadedIfComplete = (node, onLoaded) => {
    if (node.complete) onLoaded();
  };

  onMount(() => {
    // Preload only the first 3 images for faster initial load
    images.slice(0, 3).forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  });

  // --- Layout, computed in JS instead of via CSS grid-column/grid-row spans ---
  //
  // CSS Grid can't animate a track span changing (grid-column: 1/2 -> 1/3
  // is a discrete layout recompute with no interpolation), so a tile
  // "growing" into a featured spot always snapped instantly underneath
  // no matter what transition sat on top of it. Computing pixel rects
  // here and animating them with Svelte's FLIP technique gives a real,
  // continuously interpolated grow/shrink instead.
  //
  // One layout table per breakpoint (mirrors the old CSS media queries).
  // Span format: [colStart, colEnd, rowStart, rowEnd], 1-indexed grid-line
  // numbers, end exclusive — same convention CSS grid-column/row use.
  const LAYOUTS = [
    {
      minWidth: 1025,
      cols: 4,
      rows: 2,
      rowHeight: 250,
      gap: 16,
      defaultSpans: [
        [1, 3, 1, 2],
        [3, 4, 1, 2],
        [4, 5, 1, 2],
        [1, 2, 2, 3],
        [2, 3, 2, 3],
        [3, 5, 2, 3],
        [1, 3, 1, 2],
        [3, 5, 2, 3]
      ],
      featuredSpans: {
        0: [1, 3, 1, 3],
        6: [1, 3, 1, 3],
        1: [3, 5, 1, 2],
        2: [3, 5, 1, 2],
        3: [1, 3, 2, 3],
        4: [1, 3, 2, 3],
        5: [3, 5, 1, 3],
        7: [3, 5, 1, 3]
      }
    },
    {
      minWidth: 769,
      cols: 3,
      rows: 3,
      rowHeight: 200,
      gap: 16,
      defaultSpans: [
        [1, 3, 1, 2],
        [3, 4, 1, 2],
        [1, 2, 2, 3],
        [2, 4, 2, 3],
        [1, 3, 3, 4],
        [3, 4, 3, 4]
      ],
      featuredSpans: {
        0: [1, 4, 1, 3],
        3: [1, 4, 2, 4]
      }
    },
    {
      minWidth: 481,
      cols: 2,
      rows: 4,
      rowHeight: 180,
      gap: 12,
      defaultSpans: [
        [1, 3, 1, 2],
        [1, 2, 2, 3],
        [2, 3, 2, 3],
        [1, 3, 3, 4],
        [1, 2, 4, 5],
        [2, 3, 4, 5]
      ],
      featuredSpans: {}
    },
    {
      minWidth: 0,
      cols: 1,
      rows: 6,
      rowHeight: 200,
      gap: 8,
      defaultSpans: [
        [1, 2, 1, 2],
        [1, 2, 2, 3],
        [1, 2, 3, 4],
        [1, 2, 4, 5],
        [1, 2, 5, 6],
        [1, 2, 6, 7]
      ],
      featuredSpans: {}
    }
  ];

  let containerWidth = 0;
  let viewportWidth = 0;
  let gridEl;

  function readMetrics() {
    if (!gridEl) return;
    containerWidth = gridEl.clientWidth;
  }

  function readViewport() {
    viewportWidth = window.innerWidth;
  }

  onMount(() => {
    readMetrics();
    readViewport();
    const ro = new ResizeObserver(() => readMetrics());
    if (gridEl) ro.observe(gridEl);
    window.addEventListener('resize', readViewport);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', readViewport);
    };
  });

  // Picks the layout table whose breakpoint matches the current viewport.
  // The old rules were @media breakpoints on the page, not the gallery's
  // own (narrower, max-width: 1200px) box, so this has to track window
  // width — `viewportWidth` is a plain reactive variable kept current by
  // the resize listener above, which Svelte's `$:` can actually depend on.
  $: layout = LAYOUTS.find((l) => viewportWidth >= l.minWidth) ?? LAYOUTS[LAYOUTS.length - 1];

  $: colWidth = containerWidth > 0 ? (containerWidth - layout.gap * (layout.cols - 1)) / layout.cols : 0;

  function rectFor(span) {
    const [c1, c2, r1, r2] = span;
    const x = (c1 - 1) * (colWidth + layout.gap);
    const y = (r1 - 1) * (layout.rowHeight + layout.gap);
    const w = (c2 - c1) * colWidth + (c2 - c1 - 1) * layout.gap;
    const h = (r2 - r1) * layout.rowHeight + (r2 - r1 - 1) * layout.gap;
    return { x, y, w, h };
  }

  $: tiles = images.map((image, index) => {
    const isFeatured = featuredIndex === index;
    /** @type {Partial<Record<number, number[]>>} */
    const featuredSpans = layout.featuredSpans;
    const span = (isFeatured ? featuredSpans[index] : null) ?? layout.defaultSpans[index % layout.defaultSpans.length];
    return {
      image,
      index,
      featured: isFeatured,
      rect: colWidth > 0 ? rectFor(span) : null
    };
  });

  $: gridHeight = layout.rows * layout.rowHeight + (layout.rows - 1) * layout.gap;
</script>

<div class="bento-gallery">
  <div class="gallery-grid" bind:this={gridEl} style="height: {gridHeight}px">
    {#each tiles as tile (tile.index)}
      <div
        class="gallery-item-wrap"
        style={tile.rect
          ? `transform: translate(${tile.rect.x}px, ${tile.rect.y}px); width: ${tile.rect.w}px; height: ${tile.rect.h}px; z-index: ${tile.featured ? 10 : 1};`
          : 'opacity: 0'}
        animate:flip={{ duration: 550, easing: cubicOut }}
      >
        <button
          class="gallery-item"
          class:featured={tile.featured}
          class:loaded={loadedImages.has(tile.index)}
          on:mouseenter={() => handleImageHover(tile.index)}
          on:mouseleave={handleImageLeave}
          on:focus={() => handleImageFocus(tile.index)}
          style="--delay: {tile.index * 0.05}s"
        >
          <div class="image-placeholder" aria-hidden="true"></div>
          <img
            src={tile.image.src}
            alt={tile.image.alt}
            loading={tile.index < 3 ? 'eager' : 'lazy'}
            on:load={() => handleImageLoad(tile.index)}
            use:markLoadedIfComplete={() => handleImageLoad(tile.index)}
          />
          <div class="image-overlay">
            <span class="image-caption">{tile.image.caption || ''}</span>
          </div>
        </button>
      </div>
    {/each}
  </div>
</div>

<style>
  .bento-gallery {
    width: 100%;
    padding: var(--space-xl);
    background: var(--color-surface);
  }

  .gallery-grid {
    /* Layout (rect math, row heights, gaps per breakpoint) is computed in
       JS — see the LAYOUTS table in <script> — and applied to each tile
       as an absolute position/size below. This element is just the
       positioning context and overall box height (set inline via
       `gridHeight`); it holds no grid/flex layout of its own. */
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }

  .gallery-item-wrap {
    position: absolute;
    top: 0;
    left: 0;
    /* The actual grow/shrink: FLIP animates this transform/width/height
       smoothly whenever the computed rect changes, instead of a CSS grid
       span snapping instantly. */
    transition: z-index 0s linear;
  }

  .gallery-item {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    padding: 0;
    background: #f0f0f0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    transition: box-shadow 0.4s ease-out;
    animation: fadeIn 0.6s ease-out var(--delay) both;
  }

  .gallery-item.featured {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  .image-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    z-index: 1;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  .gallery-item.loaded .image-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    position: relative;
    z-index: 2;
  }

  .gallery-item.loaded img {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  .image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
    padding: 2rem 1.5rem 1.5rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }

  .gallery-item:hover .image-overlay,
  .gallery-item:focus .image-overlay {
    transform: translateY(0);
  }

  .image-caption {
    color: white;
    font-size: 0.95rem;
    font-weight: 500;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  /* Responsive design — tile positions/sizes/gaps for each breakpoint
     live in the LAYOUTS table in <script>; these media queries only
     cover the styling that table doesn't touch. */
  @media (max-width: 768px) {
    .bento-gallery {
      padding: 1rem;
    }

    .image-overlay {
      transform: translateY(0);
      background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 100%);
      padding: 1rem;
    }

    .image-caption {
      font-size: 0.85rem;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .gallery-item,
    .image-overlay {
      transition: none;
    }

    .gallery-item {
      animation: none;
    }
  }
</style>
