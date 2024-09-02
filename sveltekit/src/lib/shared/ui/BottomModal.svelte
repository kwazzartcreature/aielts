<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import { Dialog } from 'bits-ui';

	import Close from '$lib/shared/assets/icons/Close.svelte';

	export let open = false;
</script>

<Dialog.Root bind:open>
	<Dialog.Portal>
		<Dialog.Overlay
			transition={fade}
			transitionConfig={{ duration: 150 }}
			class="bg-whisper-950 fixed inset-0 z-50 opacity-90"
		/>

		<Dialog.Content
			transition={slide}
			class="bg-whisper-100 fixed bottom-0 z-50 h-3/4 w-screen rounded-xl p-6"
		>
			<Dialog.Close class="absolute right-4 top-4"><Close /></Dialog.Close>

			<Dialog.Title class="py-4">
				<slot name="title" />
			</Dialog.Title>

			<Dialog.Description>
				<slot name="description" />
			</Dialog.Description>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
