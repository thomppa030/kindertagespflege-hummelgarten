<script>
	// Small hand-picked line-icon set for recurring concepts across the site.
	// Single stroke weight, rounded caps, warm accent color by default —
	// deliberately not the Lucide/Feather "default AI" icon set.
	export let name = 'home';
	export let size = 32;

	const paths = {
		home: 'M4 13 L16 4 L28 13 M8 11 V27 H24 V11 M13 27 V19 H19 V27',
		leaf: 'M8 26 C8 14 16 6 27 6 C27 17 19 26 8 26 Z M8 26 C11 21 15 17 21 14',
		paw: 'M16 19 C11 19 8 23 8 26 C8 28 9.5 29 12 28 C14 27 15 26 16 26 C17 26 18 27 20 28 C22.5 29 24 28 24 26 C24 23 21 19 16 19 Z M10 15 C11.5 15 12.5 13.5 12.5 12 C12.5 10.5 11.5 9 10 9 C8.5 9 7.5 10.5 7.5 12 C7.5 13.5 8.5 15 10 15 Z M22 15 C23.5 15 24.5 13.5 24.5 12 C24.5 10.5 23.5 9 22 9 C20.5 9 19.5 10.5 19.5 12 C19.5 13.5 20.5 15 22 15 Z M14.5 10 C15.8 10 16.8 8.5 16.8 7 C16.8 5.5 15.8 4 14.5 4 C13.2 4 12.2 5.5 12.2 7 C12.2 8.5 13.2 10 14.5 10 Z M18.5 10 C19.8 10 20.8 8.5 20.8 7 C20.8 5.5 19.8 4 18.5 4 C17.2 4 16.2 5.5 16.2 7 C16.2 8.5 17.2 10 18.5 10 Z',
		tree: 'M16 30 V21 M16 21 C10 21 7 17 8 12 C9 13 11 13 12 11 C11 8 13 5 16 4 C19 5 21 8 20 11 C21 13 23 13 24 12 C25 17 22 21 16 21 Z',
		community: 'M11 14 C13 14 14.5 12.5 14.5 10.5 C14.5 8.5 13 7 11 7 C9 7 7.5 8.5 7.5 10.5 C7.5 12.5 9 14 11 14 Z M21 14 C23 14 24.5 12.5 24.5 10.5 C24.5 8.5 23 7 21 7 C19 7 17.5 8.5 17.5 10.5 C17.5 12.5 19 14 21 14 Z M4 26 C4 21 7 18 11 18 C13 18 14.7 19 15.6 20.5 M28 26 C28 21 25 18 21 18 C19 18 17.3 19 16.4 20.5 M11 26 C11 21.5 13 18.5 16 18.5 C19 18.5 21 21.5 21 26 Z',
		book: 'M16 8 C14 6.5 10.5 6 6 6.5 V24.5 C10.5 24 14 24.5 16 26 C18 24.5 21.5 24 26 24.5 V6.5 C21.5 6 18 6.5 16 8 Z M16 8 V26',
		clock: 'M16 28 C22.6 28 28 22.6 28 16 C28 9.4 22.6 4 16 4 C9.4 4 4 9.4 4 16 C4 22.6 9.4 28 16 28 Z M16 9 V16 L21 19',
		seed: 'M16 28 V16 M16 16 C16 9 11 6 6 6 C6 12 9 16 16 16 M16 16 C16 10 20 7 26 7 C26 13 22 17 16 17',
		heart: 'M16 27 C10 22 5 17.5 5 12.2 C5 8.2 8 5.5 11.3 5.5 C13.4 5.5 15.2 6.6 16 8.3 C16.8 6.6 18.6 5.5 20.7 5.5 C24 5.5 27 8.2 27 12.2 C27 17.5 22 22 16 27 Z',
		mail: 'M4 8 C4 6.9 4.9 6 6 6 H26 C27.1 6 28 6.9 28 8 V24 C28 25.1 27.1 26 26 26 H6 C4.9 26 4 25.1 4 24 Z M5 8 L16 17 L27 8'
	};
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 32 32"
	fill="none"
	stroke="currentColor"
	stroke-width="2.5"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
	class="icon"
>
	<path d={paths[name] || paths.home} />
</svg>

<style>
	.icon {
		flex-shrink: 0;
		color: var(--color-terracotta);
	}
</style>
