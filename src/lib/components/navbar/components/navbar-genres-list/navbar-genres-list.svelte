<script lang="ts">
  import { buttonVariants } from '@/lib/components/ui/button';
  import * as Sheet from '@/lib/components/ui/sheet';
  import * as Tabs from '@/lib/components/ui/tabs';
  import { Icons } from '@/lib/icons';
  import { cn } from '@/lib/utils';

  let currentCategory = $state('default');

  const NAVBAR_CATEGORIES = ['clothes', 'shoes', 'accessories', 'collaborations'];

  const CLOTHES_CATEGORIES = ['dresses', 'tops', 'bottoms', 'jackets', 'knitwear', 'suits'];
  const SHOES_CATEGORIES = ['boots', 'flats', 'heels', 'sneakers', 'sandals'];
</script>

<div class="flex gap-2">
  <Sheet.Root>
    <Sheet.Trigger class={buttonVariants({ variant: 'ghost' })}>
      Women <Icons.chevronDown />
    </Sheet.Trigger>
    <Sheet.Content side="top">
      <Tabs.Root
        value={currentCategory}
        onValueChange={(value) => (currentCategory = value)}
        class="grid grid-cols-2 gap-4 items-start content-start"
      >
        <Tabs.List class="bg-background flex flex-col h-fit items-start">
          <nav class="flex gap-2 flex-col items-start">
            <a href="/women/new">New</a>
            {#each NAVBAR_CATEGORIES as category (category)}
              <Tabs.Trigger
                value={category}
                class={cn(
                  'p-0 capitalize font-normal text-base cursor-pointer data-[state=active]:shadow-none',
                  category === currentCategory && 'font-semibold',
                )}
              >
                {category}
              </Tabs.Trigger>
            {/each}
            <a href="/women">Get the look</a>
          </nav>
        </Tabs.List>
        <Tabs.Content value="default">
          <div>
            <div>
              <h3>Get the look</h3>
              <a href="/women">See more</a>
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content value="clothes">
          <nav class="flex flex-col gap-2">
            {#each CLOTHES_CATEGORIES as clothesCategory (clothesCategory)}
              <a href={clothesCategory}>
                {clothesCategory}
              </a>
            {/each}
          </nav>
        </Tabs.Content>
        <Tabs.Content value="shoes">
          <nav class="flex flex-col gap-2">
            {#each SHOES_CATEGORIES as shoesCategory (shoesCategory)}
              <a href={shoesCategory}>
                {shoesCategory}
              </a>
            {/each}
          </nav>
        </Tabs.Content>
      </Tabs.Root>
    </Sheet.Content>
  </Sheet.Root>
</div>
