<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import { mrg } from '../helpers/mrg';
	import type { ClassValue } from 'clsx';

	export let error = false;

	const inputVars = cva(
		`px-4 py-3 rounded-sm text-whisper-950
  disabled:opacity-40 placeholder:text-whisper-500
  focus:placeholder:text-black/0 focus:text-whisper-950`,
		{
			variants: {
				variant: {
					default: '',
					outline: `border border-whisper-500 ${error && 'border-danger'}`,
					solid: `bg-bg-gray ${error && 'bg-bg-danger'}`,
					ghost: ''
				}
			},
			defaultVariants: {
				variant: 'default'
			}
		}
	);

	type InputVars = VariantProps<typeof inputVars>;

	let focus = false;

	export let name;
	export let value = '';
	export let placeholder = '';
	export let type: 'email' | 'password' | 'text' | 'number' | null | undefined = undefined;
	export let variant: InputVars['variant'] = 'default';
	export let disabled = false;
	export let className: ClassValue[] | string = '';
</script>

<div>
	<label class="relative inline-flex justify-between items-center">
		<input
			on:focusin={() => (focus = true)}
			on:focusout={() => (focus = false)}
			{name}
			{placeholder}
			bind:value
			{...{ type }}
			{disabled}
			class={mrg(inputVars({ variant, className }))}
		/>
		<div class="absolute right-3">
			<slot
				name="icon"
				fill={error ? 'var(--danger)' : focus ? 'var(--whisper-700)' : 'var(--whisper-500)'}
			/>
		</div>
	</label>
	{#if error}
		<p class="px-2 text-sm text-danger font-semibold"><slot name="error">Error</slot></p>
	{/if}
</div>
