<script lang="ts">
  import * as Card from '@/lib/components/ui/card/index.js';
  import OauthSignIn from '@/modules/auth/components/oauth-sign-in/oauth-sign-in.svelte';
  import SignUpForm from '@/modules/auth/components/sign-up-form/sign-up-form.svelte';

  import type { PageData } from './$types.js';

  let { data }: { data: PageData } = $props();
</script>

<div class="flex h-screen w-full items-center justify-center px-4">
  <Card.Root class="mx-auto max-w-xl">
    <Card.Header class="space-y-1">
      <Card.Title class="text-2xl">Sign Up</Card.Title>
      <Card.Description>Choose your preferred sign up method</Card.Description>
    </Card.Header>
    <Card.Content class="grid gap-4">
      <OauthSignIn />
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t"></span>
        </div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-background px-2 text-muted-foreground"> Or continue with </span>
        </div>
      </div>
      <SignUpForm form={data.form} />
    </Card.Content>
    <Card.Footer>
      <div class="text-sm text-muted-foreground">
        Already have an account?{' '}
        <a
          aria-label="Sign in"
          href="/auth/sign-in"
          class="text-primary underline-offset-4 transition-colors hover:underline"
        >
          Sign in
        </a>
      </div>
    </Card.Footer>
  </Card.Root>
</div>
