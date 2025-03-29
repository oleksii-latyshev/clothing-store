<script lang="ts">
  import { type SuperValidated, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import * as Form from '@/lib/components/ui/form';
  import Input from '@/lib/components/ui/input/input.svelte';
  import { type SignInFormSchema, signInFormSchema } from '@/modules/auth/schemas';

  let { form: formConfig }: { form: SuperValidated<SignInFormSchema> } = $props();

  const form = superForm(formConfig, {
    validators: zodClient(signInFormSchema),
  });

  const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
  <Form.Field {form} name="email">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Email</Form.Label>
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
  <Form.Button>Submit</Form.Button>
</form>
