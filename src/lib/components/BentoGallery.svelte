<script>
  import { onMount } from 'svelte';
  
  export let images = [];
  
  let featuredIndex = 0;
  let galleryElement;
  
  const handleImageHover = (index) => {
    featuredIndex = index;
  };
  
  const handleImageLeave = () => {
    // Optional: Keep the last hovered as featured
    // Or reset to first image: featuredIndex = 0;
  };
  
  onMount(() => {
    // Preload images for smoother transitions
    images.forEach(image => {
      const img = new Image();
      img.src = image.src;
    });
  });
</script>

<div class="bento-gallery" bind:this={galleryElement}>
  <div class="gallery-grid">
    {#each images as image, index}
      <button
        class="gallery-item"
        class:featured={featuredIndex === index}
        on:mouseenter={() => handleImageHover(index)}
        on:mouseleave={handleImageLeave}
        on:focus={() => handleImageHover(index)}
        style="--delay: {index * 0.05}s"
      >
        <img 
          src={image.src} 
          alt={image.alt}
          loading="lazy"
        />
        <div class="image-overlay">
          <span class="image-caption">{image.caption || ''}</span>
        </div>
      </button>
    {/each}
  </div>
</div>

<style>
  .bento-gallery {
    width: 100%;
    padding: 2rem;
    background: #FAFAFA;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 250px);
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    cursor: pointer;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                z-index 0s linear 0.2s;
    transform: scale(1);
    z-index: 1;
    border: none;
    padding: 0;
    background: #fff;
    animation: fadeIn 0.6s ease-out var(--delay) both;
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

  /* Default grid positions */
  .gallery-item:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  .gallery-item:nth-child(2) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  .gallery-item:nth-child(3) {
    grid-column: 4 / 5;
    grid-row: 1 / 2;
  }

  .gallery-item:nth-child(4) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .gallery-item:nth-child(5) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  .gallery-item:nth-child(6) {
    grid-column: 3 / 5;
    grid-row: 2 / 3;
  }

  .gallery-item:nth-child(7) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  .gallery-item:nth-child(8) {
    grid-column: 3 / 5;
    grid-row: 2 / 3;
  }

  /* Featured state - make it larger */
  .gallery-item.featured {
    z-index: 10;
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                z-index 0s linear;
  }
  
  /* Non-featured items scale down slightly */
  .gallery-grid:has(.gallery-item.featured) .gallery-item:not(.featured) {
    transform: scale(0.98);
    opacity: 0.85;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s,
                opacity 0.4s ease 0.1s;
  }

  /* Adjust grid for featured items */
  .gallery-item:nth-child(1).featured,
  .gallery-item:nth-child(7).featured {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }

  .gallery-item:nth-child(2).featured,
  .gallery-item:nth-child(3).featured {
    grid-column: 3 / 5;
    grid-row: 1 / 2;
  }

  .gallery-item:nth-child(4).featured,
  .gallery-item:nth-child(5).featured {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  .gallery-item:nth-child(6).featured,
  .gallery-item:nth-child(8).featured {
    grid-column: 3 / 5;
    grid-row: 1 / 3;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .gallery-item:hover img {
    transform: scale(1.1);
  }

  .image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
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
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }

  /* Responsive design */
  @media (max-width: 1024px) {
    .gallery-grid {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 200px);
    }

    .gallery-item:nth-child(1) {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    }

    .gallery-item:nth-child(2) {
      grid-column: 3 / 4;
      grid-row: 1 / 2;
    }

    .gallery-item:nth-child(3) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    .gallery-item:nth-child(4) {
      grid-column: 2 / 4;
      grid-row: 2 / 3;
    }

    .gallery-item:nth-child(5) {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }

    .gallery-item:nth-child(6) {
      grid-column: 3 / 4;
      grid-row: 3 / 4;
    }

    /* Adjust featured states for tablet */
    .gallery-item:nth-child(1).featured {
      grid-column: 1 / 4;
      grid-row: 1 / 3;
    }

    .gallery-item:nth-child(4).featured {
      grid-column: 1 / 4;
      grid-row: 2 / 4;
    }
  }

  @media (max-width: 768px) {
    .bento-gallery {
      padding: 1rem;
    }

    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 180px);
      gap: 0.75rem;
    }

    .gallery-item:nth-child(1) {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    }

    .gallery-item:nth-child(2) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    .gallery-item:nth-child(3) {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }

    .gallery-item:nth-child(4) {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }

    .gallery-item:nth-child(5) {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
    }

    .gallery-item:nth-child(6) {
      grid-column: 2 / 3;
      grid-row: 4 / 5;
    }

    /* Mobile featured states */
    .gallery-item.featured {
      transform: scale(1.02);
    }

    .gallery-item:nth-child(1).featured,
    .gallery-item:nth-child(4).featured {
      grid-column: 1 / 3;
      grid-row: span 2;
    }

    .image-overlay {
      transform: translateY(0);
      background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%);
      padding: 1rem;
    }

    .image-caption {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    .gallery-grid {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 200px);
      gap: 0.5rem;
    }

    .gallery-item:nth-child(n) {
      grid-column: 1;
      grid-row: auto;
    }

    .gallery-item.featured {
      transform: scale(1);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .gallery-item,
    .gallery-item img,
    .image-overlay {
      transition: none;
    }
    
    .gallery-item {
      animation: none;
    }
  }
</style>