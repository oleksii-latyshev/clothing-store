<script>
	import { trpc } from '@/server/trpc/client.js';

	export let data;

	const query = trpc.hello.query({
		name: 'Oleksii'
	});
</script>

{data.hello}

{#if $query.isLoading}
	<p>Loading...</p>
{:else if $query.error}
	<p>Error: {$query.error.message}</p>
{:else if $query.data}
	<p>{$query.data}</p>
{/if}
