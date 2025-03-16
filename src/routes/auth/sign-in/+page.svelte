<script lang="ts">
  import SignInForm from '@/modules/auth/components/sign-in-form/sign-in-form.svelte';

  import type { PageData } from './$types.js';

  let { data }: { data: PageData } = $props();
</script>

<div class="flex h-screen w-full items-center justify-center px-4">
  <SignInForm form={data.form} />
</div>
