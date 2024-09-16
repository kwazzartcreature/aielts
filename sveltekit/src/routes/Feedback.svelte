<script lang="ts">
	import { onMount } from 'svelte';
	import FeedbackMobile from '$lib/shared/assets/images/bg-feedback-mobile.png';
	import Avatar from '$lib/shared/ui/Avatar.svelte';

	let scroll: HTMLElement;

	onMount(() => {
		if (scroll) {
			const scrollWidth = scroll.scrollWidth;
			scroll.scrollLeft = scrollWidth / 2 - scroll.clientWidth / 2;
		}
	});
</script>

<section class="pt-4">
	<h2 class="px-8 py-4 text-center text-xl font-semibold">Watch video how it works!</h2>

	<iframe
		class="mx-auto mb-12 h-[200px] w-[340px] rounded-lg md:mb-[100px] md:h-[360px] md:w-[800px]"
		title="Service showcase"
		src="https://www.youtube.com/embed/tgbNymZ7vqY"
	>
	</iframe>

	<div class="relative overflow-hidden pb-12 pt-5">
		<img
			class="absolute left-0 top-0 -z-10"
			src={FeedbackMobile}
			alt="Feedback circles background"
		/>

		<h2 class="px-8 py-4 text-xl font-semibold">Users' Feedback</h2>

		<ul bind:this={scroll} class="flex cursor-grabbing space-x-2 overflow-scroll">
			<li class="bg-bg-white h-fit min-w-[312px] max-w-[312px] space-y-3 rounded-lg px-5 py-4">
				<div class="flex items-center space-x-3 px-2">
					<Avatar />
					<div>
						<h4 class="text-lg font-semibold">Anton</h4>
						<p>@evaelle</p>
					</div>
				</div>
				<p class="text-sm">
					I can't believe this service is so accurate. I was looking for something like this for a
					long time, before my exam I gave around five tests every day, and achieved my desired
					score.
				</p>
			</li>

			<li class="bg-bg-white h-fit min-w-[312px] max-w-[312px] space-y-3 rounded-lg px-5 py-4">
				<div class="flex items-center space-x-3 px-2">
					<Avatar />
					<div>
						<h4 class="text-lg font-semibold">Anton</h4>
						<p>@evaelle</p>
					</div>
				</div>
				<p class="text-sm">
					I can't believe this service is so accurate. I was looking for something like this for a
					long time, before my exam
				</p>
			</li>

			<li class="bg-bg-white h-fit min-w-[312px] max-w-[312px] space-y-3 rounded-lg px-5 py-4">
				<div class="flex items-center space-x-3 px-2">
					<Avatar />
					<div>
						<h4 class="font-semibold">Anton</h4>
						<p>@evaelle</p>
					</div>
				</div>
				<p class="text-sm">
					I can't believe this service is so accurate. I was looking for something like this for a
					long time, before my exam I gave around five tests every day, and achieved my desired
					score.
				</p>
			</li>

			<li class="bg-bg-white h-fit min-w-[312px] max-w-[312px] space-y-3 rounded-lg px-5 py-4">
				<div class="flex items-center space-x-3 px-2">
					<Avatar />
					<div>
						<h4 class="font-semibold">Anton</h4>
						<p>@evaelle</p>
					</div>
				</div>
				<p class="text-sm">
					I can't believe this service is so accurate. I was looking for something like this for a
					long time, before my exam
				</p>
			</li>

			<li class="bg-bg-white h-fit min-w-[312px] max-w-[312px] space-y-3 rounded-lg px-5 py-4">
				<div class="flex items-center space-x-3 px-2">
					<Avatar />
					<div>
						<h4 class="font-semibold">Anton</h4>
						<p>@evaelle</p>
					</div>
				</div>
				<p class="text-sm">
					I can't believe this service is so accurate. I was looking for something like this for
				</p>
			</li>
		</ul>
	</div>
</section>
