<script lang="ts">
	import { onMount } from 'svelte';

	import { mrg } from '$lib/shared/helpers/mrg';

	import PhoneFrame from '$lib/shared/assets/images/phone-frame.png';

	let scroll: HTMLElement;

	onMount(() => {
		if (scroll) {
			const scrollWidth = scroll.scrollWidth;
			scroll.scrollLeft = scrollWidth / 2 - scroll.clientWidth / 2;
		}
	});
</script>

<section class="bg-whisper-950 mx-6 rounded-xl pb-12 pt-4 md:relative md:min-h-[500px]">
	<h2
		class="text-bg-white md:text-h2 left-64 top-20 px-8 py-4 text-xl font-semibold md:absolute md:max-w-[540px]"
	>
		Excel in your exam performance*with aiELTS
	</h2>

	<img
		class={mrg('mx-auto mb-10', 'left-12 top-12 md:absolute md:m-0 md:h-[400px]')}
		src={PhoneFrame}
		alt="iphone frame"
	/>

	<ul bind:this={scroll} class="top-52 flex cursor-grabbing space-x-2 overflow-scroll md:relative">
		<li class="bg-mindaro-300 h-fit min-w-[312px] rounded-lg">
			<h3 class="px-5 pb-3 pt-4 text-lg font-semibold">
				Prepare for the IELTS speaking*test format
			</h3>
			<p class="bg-mindaro-100 rounded-lg px-5 py-4">
				Get accustomed to the exam format and feel at ease during the test
			</p>
		</li>

		<li class="bg-chimera-300 h-fit min-w-[312px] rounded-lg">
			<h3 class="px-5 pb-3 pt-4 text-lg font-semibold">
				Receive feedback that helps*improve your score
			</h3>
			<p class="bg-chimera-100 rounded-lg px-5 py-4">
				AI-powered feedback will help you identify areas for growth and provide suggestions to
				strengthen weak points
			</p>
		</li>

		<li class="bg-rapture-300 h-fit min-w-[312px] rounded-lg">
			<h3 class="px-5 pb-3 pt-4 text-lg font-semibold">Track your English proficiency*level</h3>
			<p class="bg-rapture-100 rounded-lg px-5 py-4">
				Test results allow you to accurately assess your speaking band score with an accuracy of XX%
			</p>
		</li>

		<li class="bg-mindaro-300 h-fit min-w-[312px] rounded-lg">
			<h3 class="px-5 pb-3 pt-4 text-lg font-semibold">Study vocabulary before*taking*the test</h3>
			<p class="bg-mindaro-100 rounded-lg px-5 py-4">
				Before taking tests on specific topics, you have the opportunity to familiarize yourself
				with the relevant vocabulary
			</p>
		</li>

		<li class="bg-chimera-300 h-fit min-w-[312px] rounded-lg">
			<h3 class="px-5 pb-3 pt-4 text-lg font-semibold">Learn to speak on*various*topics</h3>
			<p class="bg-chimera-100 rounded-lg px-5 py-4">
				Get the opportunity to answer XX questions on YY topics that appear in IELTS, and feel
				confident on exam day.
			</p>
		</li>
	</ul>
</section>
