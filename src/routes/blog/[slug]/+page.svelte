<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	$: ({ date, title, image, locale } = data.metadata! ?? {});

    $: title = title ?? data.slug
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
</script>

<svelte:head>
    <title>{title} - Justin McIntyre</title>
</svelte:head>

<main class="container">
    <article data-theme="light">
        <h1>{title}</h1>
        <svelte:component this={data.page} />
    </article>
</main>
