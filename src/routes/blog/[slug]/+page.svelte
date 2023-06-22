<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	let { date, title, image, locale } = data.metadata!;
</script>

<svelte:head>
	<title>{title} - Justin McIntyre</title>
</svelte:head>

<div>
	<h1>{title}</h1>
	<svelte:component this={data.page} />
</div>
