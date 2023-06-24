export async function load({ params } : any) {
	const { slug } = params;

    let post
    if(slug){
	    post = await import(/* @vite-ignore */ `../../../_entries/${!!slug ? slug : 'index'}.md`);
    }
	const { default: page, metadata } = post;

	if (!page) {
		return {
			status: 404
		};
	}

	return { page, metadata, slug };
}
