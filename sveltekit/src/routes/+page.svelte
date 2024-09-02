<script lang="ts">
	import { slide } from 'svelte/transition';

	import Button from '$lib/shared/ui/Button.svelte';
	import Accordion from '$lib/shared/ui/Accordion.svelte';

	import Logo from '$lib/shared/assets/icons/Logo.svelte';
	import Student from '$lib/shared/assets/icons/Student.svelte';
	import Visa from '$lib/shared/assets/icons/Visa.svelte';
	import Business from '$lib/shared/assets/icons/Business.svelte';
	import Tooltip from '$lib/shared/assets/icons/Tooltip.svelte';
	import CheckMark from '$lib/shared/assets/icons/CheckMark.svelte';

	import OfferMobile from '$lib/shared/assets/images/offer-mobile.png';
	import FeedbackMobile from '$lib/shared/assets/images/bg-feedback-mobile.png';
	import TA_BG from '$lib/shared/assets/images/bg-TA-mobile.png';
	import PhoneFrame from '$lib/shared/assets/images/phone-frame.png';

	let openTooltip = true;

	const accordionItems = [
		{
			title: 'Is there a free trial?',
			content: 'Yes, after registration you can solve two speaking full-tests for free'
		},
		{
			title: 'Are your mock tests similar to the actual exams?',
			content:
				"AIELTS's mock tests include real IELTS exam questions of 2023-2024 years. Moreover, AIELTS's content is up-to-date with the latest trends of the IELTS test."
		},
		{
			title: 'How accurate are the results compared to the real IELTS test?',
			content:
				'The grading algorithms are trained over actual IELTS speaking test. Moreover, they use the same marking band descriptors as used by the IELTS team and non-biased compared to a human evaluator.'
		},
		{
			title: 'Can I do both General and Academic IELTS tests?',
			content: 'Yes, we have both categories of practice tests.'
		},
		{
			title: 'Can I choose between Part 1, 2 and 3 in the Speaking Test?',
			content:
				'Yes, you can choose to practice either Part 1, 2 or 3 in the Speaking Test, or you can pass the full test'
		},
		{
			title: 'Can I check my previous results?',
			content:
				'Yes, they are available on the home page after you log in. It is represented by graph to help you visualize your progress.'
		},
		{
			title: 'Is this platform suitable for beginners?',
			content:
				"Absolutely! Whether you're a beginner or an advanced learner, our platform offers diverse practice tasks and personalized feedback to meet your individual learning needs."
		},
		{
			title: 'What support is available if I have questions or issues?',
			content:
				'We offer comprehensive customer support. If you encounter any issues or have any questions, feel free to reach out to our support team via email aielts.support@gmail.com.'
		}
	];
</script>

<header class="flex items-center justify-between px-4 py-6">
	<a href="/"><Logo /></a>
	<Button variant="outline" size="small">Log In</Button>
</header>

<main>
	<section class="pb-12 pt-4">
		<div class="space-y-3 px-6">
			<h1 class="text-h2 font-semibold">Prepare for IELTS Speaking with an AI</h1>
			<p class="text-xl">
				Get a month of AI-enhanced preparation at the price of one tutoring session
			</p>
		</div>

		<img src={OfferMobile} alt="offer girl" />

		<div class="flex justify-center px-6 pt-4">
			<Button className="text-md py-3" variant="solid" size="large">
				<span class="px-6">Start preparation</span>
			</Button>
		</div>
	</section>

	<section class="relative pb-12 pt-5">
		<img class="absolute left-0 top-0 -z-10 rounded-xl" src={TA_BG} alt="circles background" />
		<h2 class="px-8 py-4 text-xl font-semibold">Take your chance!</h2>

		<ul class="*:bg-bg-white space-y-2 px-6 *:space-y-2 *:rounded-xl *:px-5 *:py-4">
			<li>
				<Student />
				<h3 class="font-semibold">About to study abroad?</h3>
				<p class="text-sm">
					Take the first step towards your future at a prestigious foreign university
				</p>
			</li>

			<li>
				<Visa />
				<h3 class="font-semibold">Planning to emigrate?</h3>
				<p class="text-sm">
					Pass IELTS successfully and unlock new opportunities for living abroad
				</p>
			</li>

			<li>
				<Business />
				<h3 class="font-semibold">Want to work overseas?</h3>
				<p class="text-sm">Increase your chances of employment abroad with our AI platform</p>
			</li>
		</ul>
	</section>

	<section class="mt-7 pb-12">
		<div class="flex flex-col items-center space-y-4 pb-4 pt-8">
			<div>
				<Logo width={180} height={60} />
			</div>
			<p class="max-w-[300px] text-center">
				aiELTS — is an AI-based language practice platform, designed specifically to evaluate skills
				for IELTS Speaking
			</p>
		</div>

		<ul class="space-y-2 px-6 py-5 *:rounded-lg *:text-sm">
			<li class="bg-chimera-100 max-w-[280px] px-5 py-4">
				<p>
					The evaluation of speaking test is accomplished by an <span class="font-bold"
						>advanced GPT-4o model,</span
					> fine-tuned on a large dataset of speaking exams graded by IELTS experts.
				</p>
			</li>

			<li class="bg-mindaro-200 relative ml-auto max-w-[190px] px-5 py-4">
				<button on:click={() => (openTooltip = !openTooltip)} class="text-left">
					<p><span class="font-bold">94%</span> accuracy of assessment</p>
					<div class="absolute right-4 top-4">
						<Tooltip />
					</div>
				</button>
			</li>

			{#if openTooltip}
				<li transition:slide class="bg-bg-gray max-w-[300px] px-5 py-4">
					94% of the simulator's scores match the IELTS expert's assessment with an accuracy of ±0.5
					points
				</li>
			{/if}
		</ul>

		<ul class="space-y-6 px-6 pt-4">
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

	<section class="bg-whisper-950 rounded-xl pb-12 pt-4">
		<h2 class="text-bg-white px-8 py-4 text-xl font-semibold">
			Excel in your exam performance*with aiELTS
		</h2>

		<img class="mx-auto mb-10" src={PhoneFrame} alt="iphone frame" />

		<ul class="flex justify-center space-x-2 overflow-hidden">
			<li class="bg-rapture-300 min-w-[312px] rounded-lg">
				<h3 class="px-5 pb-3 pt-4 text-lg font-semibold">Track your English proficiency*level</h3>
				<p class="bg-rapture-100 rounded-lg px-5 py-4">
					Test results allow you to accurately assess your speaking band score with an accuracy of
					XX%
				</p>
			</li>

			<li class="bg-rapture-300 min-w-[312px] rounded-lg">
				<h3 class="px-5 pb-3 pt-4 text-lg font-semibold">Track your English proficiency*level</h3>
				<p class="bg-rapture-100 rounded-lg px-5 py-4">
					Test results allow you to accurately assess your speaking band score with an accuracy of
					XX%
				</p>
			</li>

			<li class="bg-rapture-300 min-w-[312px] rounded-lg">
				<h3 class="px-5 pb-3 pt-4 text-lg font-semibold">Track your English proficiency*level</h3>
				<p class="bg-rapture-100 rounded-lg px-5 py-4">
					Test results allow you to accurately assess your speaking band score with an accuracy of
					XX%
				</p>
			</li>
		</ul>
	</section>

	<section class="pt-4">
		<h2 class="px-8 py-4 text-center text-xl font-semibold">Watch video how it works!</h2>

		<iframe
			class="mx-auto mb-12 rounded-lg"
			title="Service showcase"
			width="340"
			height="175"
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

			<ul class="flex justify-center space-x-2 overflow-hidden">
				<li class="bg-bg-white min-w-[312px] max-w-[312px] space-y-3 rounded-lg px-5 py-4">
					<div class="flex items-center space-x-3 px-2">
						<div
							class="border-whisper-150 bg-bg-gray inline-flex size-12 items-center justify-center rounded-full border-2 font-bold"
						>
							A
						</div>
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

				<li class="bg-bg-white min-w-[312px] max-w-[312px] space-y-3 rounded-lg px-5 py-4">
					<div class="flex items-center space-x-3 px-2">
						<div
							class="border-whisper-150 bg-bg-gray inline-flex size-12 items-center justify-center rounded-full border-2 font-bold"
						>
							A
						</div>
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

				<li class="bg-bg-white min-w-[312px] max-w-[312px] space-y-3 rounded-lg px-5 py-4">
					<div class="flex items-center space-x-3 px-2">
						<div
							class="border-whisper-150 bg-bg-gray inline-flex size-12 items-center justify-center rounded-full border-2 font-bold"
						>
							A
						</div>
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
			</ul>
		</div>
	</section>

	<section class="mb-12 pt-4">
		<h2 class="px-8 py-4 text-xl font-semibold">FAQs</h2>

		<div class="px-6">
			<Accordion items={accordionItems} />
		</div>
	</section>
</main>

<footer class="bg-whisper-100 rounded-xl px-6 pb-[100px] pt-10">
	<h3 class="mb-2 text-xl font-semibold">Resourses</h3>
	<ul class="mb-5">
		<li class="text-lg"><a href="/">About IELTS</a></li>
		<li class="text-lg"><a href="/">Privacy Policy</a></li>
		<li class="text-lg"><a href="/">Term and Conditions</a></li>
		<li class="text-lg"><a href="/">Refund and Cancellation</a></li>
	</ul>

	<h3 class="mb-2 text-xl font-semibold">Contact Us</h3>
</footer>
