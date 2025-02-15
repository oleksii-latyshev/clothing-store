<script lang="ts">
	import '../app.css';

	import type { Snippet } from 'svelte';
	import { i18n } from '@/lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import { trpc } from '@/server/trpc/client';

	import type { LayoutData } from './$types';

	let { children, data }: { data: LayoutData; children: Snippet } = $props();

	const queryClient = $derived(trpc.hydrateFromServer(data.trpc));
</script>

<ParaglideJS {i18n}>
	<QueryClientProvider client={queryClient}>
		{@render children()}
	</QueryClientProvider>
</ParaglideJS>
