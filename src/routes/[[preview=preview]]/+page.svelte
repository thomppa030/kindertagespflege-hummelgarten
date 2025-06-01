<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import Hero from '$lib/components/Hero.svelte';

	export let data;
</script>

<Hero />

<SliceZone slices={data.page.data.slices} {components} />
