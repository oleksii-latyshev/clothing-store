<script lang="ts">
  import { authClient } from '@/modules/auth/core/client';

  const { data } = authClient.useSession.get();
</script>

<div>
  {#if data}
    <div>
      <p>
        {data?.user.name}
      </p>
      <button
        onclick={async () => {
          await authClient.signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  {:else}
    <button
      onclick={async () => {
        await authClient.signIn.social({
          provider: 'github',
        });
      }}
    >
      Continue with github
    </button>
  {/if}
</div>
