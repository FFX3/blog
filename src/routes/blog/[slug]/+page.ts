export async function load({ params } : any) {
	const { slug } = params;

	const post = await import(/* @vite-ignore */ `../../../_entries/notes/${slug}.md`);
    console.log(post)
	const { default: page, metadata } = post;

	if (!page) {
		return {
			status: 404
		};
	}

	return { page, metadata };
}
