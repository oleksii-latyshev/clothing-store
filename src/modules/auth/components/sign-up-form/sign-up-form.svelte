<script lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import * as Form from '@/lib/components/ui/form';
  import Input from '@/lib/components/ui/input/input.svelte';
  import { cn } from '@/lib/utils';
  import type { SignUpFormProps } from '@/modules/auth/components/sign-up-form/types';
  import { signUpFormSchema } from '@/modules/auth/schemas';

  let { form: formConfig, class: className, ...props }: SignUpFormProps = $props();

  const form = superForm(formConfig, {
    validators: zodClient(signUpFormSchema),
  });

  const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance class={cn('flex flex-col gap-1', className)} {...props}>
  <Form.Field {form} name="email">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Email</Form.Label>
        <Form.Description>Enter your email where we can contact you</Form.Description>
        <Input {...props} bind:value={$formData.email} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="name">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Name</Form.Label>
        <Form.Description>Enter your name by which we can address you</Form.Description>
        <Input {...props} bind:value={$formData.email} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="password">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Password</Form.Label>
        <Input {...props} bind:value={$formData.email} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="confirmPassword">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Confirm Password</Form.Label>
        <Input {...props} bind:value={$formData.email} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Button class="w-full">Submit</Form.Button>
</form>
