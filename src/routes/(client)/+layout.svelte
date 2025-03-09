<script lang="ts">
  import Navbar from '@/lib/components/navbar/navbar.svelte';

  import type { LayoutProps } from './$types';

  let { children }: LayoutProps = $props();
</script>

<main>
  <Navbar />
  {@render children()}
</main>
