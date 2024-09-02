<script lang="ts">
	import { Accordion } from 'bits-ui';
	import { slide } from 'svelte/transition';
	import Back from '../assets/icons/Back.svelte';

	export let items: { title: string; content: string }[];
</script>

<Accordion.Root class="w-full sm:max-w-[70%]" multiple>
	{#each items as item, i}
		<Accordion.Item value="${i}" class="border-dark-10 group border-b px-1.5">
			<Accordion.Header>
				<Accordion.Trigger
					class="flex w-full flex-1 items-center justify-between py-5 text-left text-[15px] font-semibold transition-all [&[data-state=open]>span>svg]:rotate-180 "
				>
					{item.title}
					<span
						class="hover:bg-dark-10 inline-flex size-8 rotate-180 items-center justify-center rounded-[7px] bg-transparent transition-all"
					>
						<Back />
					</span>
				</Accordion.Trigger>
			</Accordion.Header>

			<Accordion.Content
				transition={slide}
				transitionConfig={{ duration: 200 }}
				class="pb-[25px] text-sm tracking-[-0.01em]"
			>
				{item.content}
			</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
