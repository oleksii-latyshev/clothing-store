<script lang="ts">
  import type { LayoutProps } from './$types';

  let { children }: LayoutProps = $props();
</script>

<main>
  <header>123</header>
  {@render children()}
</main>
