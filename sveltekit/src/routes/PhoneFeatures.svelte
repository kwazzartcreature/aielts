<script lang="ts">
	import PhoneFrame from '$lib/shared/assets/images/phone-frame.png';
	import { onMount } from 'svelte';

	let scroll: HTMLElement;

	onMount(() => {
		if (scroll) {
			const scrollWidth = scroll.scrollWidth;
			scroll.scrollLeft = scrollWidth / 2 - scroll.clientWidth / 2;
		}
	});
</script>

<section class="bg-whisper-950 rounded-xl pb-12 pt-4">
	<h2 class="text-bg-white px-8 py-4 text-xl font-semibold">
		Excel in your exam performance*with aiELTS
	</h2>

	<img class="mx-auto mb-10" src={PhoneFrame} alt="iphone frame" />

	<ul bind:this={scroll} class="flex cursor-grabbing space-x-2 overflow-scroll">
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
