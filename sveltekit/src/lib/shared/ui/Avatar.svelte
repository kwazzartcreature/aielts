<script lang="ts">
	import { Avatar } from 'bits-ui';

	export let src: string | null = null;
	export let alt = 'profile';
	export let loadingStatus: Avatar.Props['loadingStatus'] = undefined;
</script>

<Avatar.Root
	bind:loadingStatus
	class="size-12 rounded-full {loadingStatus === 'loaded' ||
		'border-transparent'} bg-bg-gray outline-whisper-150 text-[17px] font-medium uppercase outline outline-1"
>
	<div
		class="flex h-full w-full items-center justify-center overflow-hidden rounded-full border-transparent"
	>
		<Avatar.Image {src} {alt} />
		<Avatar.Fallback>HB</Avatar.Fallback>
	</div>
</Avatar.Root>
