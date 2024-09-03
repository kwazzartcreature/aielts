<script lang="ts">
	import { slide } from 'svelte/transition';

	import { mrg } from '$lib/shared/helpers/mrg';

	import Logo from '$lib/shared/assets/icons/Logo.svelte';
	import Tooltip from '$lib/shared/assets/icons/Tooltip.svelte';
	import CheckMark from '$lib/shared/assets/icons/CheckMark.svelte';
	let openTooltip = false;
</script>

<section class="mt-7 pb-12">
	<div class="flex flex-col items-center space-y-4 pb-4 pt-8">
		<div>
			<Logo width={180} height={60} />
		</div>
		<p class={mrg('max-w-[300px] text-center', 'md:text-h3 md:max-w-[630px]')}>
			aiELTS — is an AI-based language practice platform, designed specifically to evaluate skills
			for IELTS Speaking
		</p>
	</div>

	<ul class={mrg('space-y-2 px-6 py-5', 'md:mx-auto md:max-w-[700px] md:space-y-[22px]')}>
		<li
			class={mrg(
				'bg-chimera-100 max-w-[280px] rounded-lg px-5 py-4 text-sm',
				'md:max-w-[550px]  md:text-lg'
			)}
		>
			<p>
				The evaluation of speaking test is accomplished by an <span class="font-bold"
					>advanced GPT-4o model,</span
				> fine-tuned on a large dataset of speaking exams graded by IELTS experts.
			</p>
		</li>

		<li
			class={mrg(
				'bg-mindaro-200 relative ml-auto max-w-[190px] rounded-lg px-5 py-4 text-sm',
				'md:max-w-[550px]'
			)}
		>
			<p class="hidden text-lg md:block">
				94% of the simulator's scores match the IELTS expert's assessment with an accuracy of ±0.5
				points
			</p>
			<button on:click={() => (openTooltip = !openTooltip)} class="text-left md:hidden">
				<p><span class="font-bold">94%</span> accuracy of assessment</p>
				<div class="absolute right-4 top-4">
					<Tooltip />
				</div>
			</button>
		</li>

		{#if openTooltip}
			<li
				transition:slide
				class={mrg('bg-bg-gray max-w-[300px] rounded-lg px-5 py-4 text-sm', 'md:max-w-[550px]')}
			>
				94% of the simulator's scores match the IELTS expert's assessment with an accuracy of ±0.5
				points
			</li>
		{/if}
	</ul>

	<ul class={mrg('space-y-6 px-6 pt-4', 'grid-cols-2 grid-rows-2 gap-8 md:grid md:space-y-0')}>
		<li class="flex items-center space-x-4">
			<div>
				<CheckMark size={36} />
			</div>
			<div>
				<h3 class="text-lg font-semibold">Save on regular tutor sessions</h3>
				<p>Don’t need to worry about the high cost of*tutor sessions</p>
			</div>
		</li>

		<li class="flex items-center space-x-4">
			<div>
				<CheckMark size={36} />
			</div>
			<div>
				<h3 class="text-lg font-semibold">Get instant feedback results</h3>
				<p>The platform takes less than X minutes to*generate detailed feedback</p>
			</div>
		</li>

		<li class="flex items-center space-x-4">
			<div>
				<CheckMark size={36} />
			</div>
			<div>
				<h3 class="text-lg font-semibold">Practice anytime and anywhere</h3>
				<p>Choose your own pace and prepare as*much*as you need</p>
			</div>
		</li>

		<li class="flex items-center space-x-4">
			<div>
				<CheckMark size={36} />
			</div>
			<div>
				<h3 class="text-lg font-semibold">Don't be afraid to make mistakes</h3>
				<p>Record your answers in the trainer and*don’t*be afraid to make silly mistakes</p>
			</div>
		</li>
	</ul>
</section>
