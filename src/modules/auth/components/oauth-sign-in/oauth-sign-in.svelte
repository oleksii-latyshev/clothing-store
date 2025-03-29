<script lang="ts">
  import Button from '@/lib/components/ui/button/button.svelte';
  import { Icons } from '@/lib/icons';

  const OAUTH_PROVIDES = [
    {
      title: 'Google',
      icon: Icons.github,
    },
    {
      title: 'Github',
      icon: Icons.github,
    },
  ];
</script>

<ul class="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
  {#each OAUTH_PROVIDES as { title, icon: Icon } (title)}
    <Button variant="outline" class="w-full bg-background">
      <Icon class="mr-2 size-4" aria-hidden="true" />
      {title}
    </Button>
  {/each}
</ul>
