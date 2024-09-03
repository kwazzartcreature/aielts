<script lang="ts">
	import { goto } from '$app/navigation';

	import Button from '$lib/shared/ui/Button.svelte';
	import BottomModal from '$lib/shared/ui/BottomModal.svelte';

	import Hero from './Hero.svelte';
	import Segments from './Segments.svelte';
	import ServiceQuality from './ServiceQuality.svelte';
	import PhoneFeatures from './PhoneFeatures.svelte';
	import Feedback from './Feedback.svelte';
	import Faq from './FAQ.svelte';

	import Logo from '$lib/shared/assets/icons/Logo.svelte';

	let open = false;

	const openModal = () => {
		open = true;
	};
</script>

<header class="flex items-center justify-between px-4 py-6">
	<a href="/"><Logo /></a>
	<Button on:click={openModal} variant="outline" size="small">Log In</Button>
</header>

<BottomModal bind:open>
	<h3 class="text-xl font-semibold" slot="title">Start today with aiELTS</h3>
	<div slot="description">
		<div class="bg-bg-gray mb-2 rounded-lg p-5">
			<h4 class="mb-2 text-lg font-semibold">Free Trial</h4>
			<p class="mb-4">2 free full-length IELTS speaking tests with*AI*feedback for signup users!</p>
			<p class="text-h2 font-semibold">0₽</p>
		</div>

		<div class="bg-bg-white space-y-4 rounded-lg p-5">
			<div>
				<span class="bg-chimera-200 rounded-[100px] px-3 py-1 text-sm font-semibold">3 options</span
				>
				<span class="bg-mindaro-300 rounded-[100px] px-3 py-1 text-sm font-semibold"
					>SAVE UP TO 50%</span
				>
			</div>

			<div>
				<h4 class="mb-2 text-lg font-semibold">AIELTS Pro</h4>
				<p class="text-sm">Over 200 speaking tests and full access to*functions of our platform!</p>
			</div>

			<div>
				<p>From</p>
				<p><span class="text-h2 font-semibold">750₽</span>/month</p>
			</div>
		</div>

		<Button
			on:click={() => goto('/sign-up')}
			className="text-md mx-auto block py-3 my-4"
			variant="solid"
			size="large"><span class="px-6">Start for free!</span></Button
		>
	</div>
</BottomModal>

<main>
	<Hero>
		<svelte:fragment slot="action">
			<Button
				on:click={openModal}
				className="max-h-[60px] text-md py-3"
				variant="solid"
				size="large"
			>
				<span class="px-6"> Start preparation </span>
			</Button>
		</svelte:fragment>
	</Hero>

	<Segments />

	<ServiceQuality />

	<PhoneFeatures />

	<Feedback />

	<Faq />
</main>

<footer class="bg-whisper-100 rounded-xl px-6 pb-[100px] pt-10 md:flex md:space-x-8">
	<div>
		<h3 class="mb-2 text-xl font-semibold">Resourses</h3>
		<ul class="mb-5">
			<li class="text-lg"><a href="/">About IELTS</a></li>
			<li class="text-lg"><a href="/">Privacy Policy</a></li>
			<li class="text-lg"><a href="/">Term and Conditions</a></li>
			<li class="text-lg"><a href="/">Refund and Cancellation</a></li>
		</ul>
	</div>

	<div>
		<h3 class="mb-2 text-xl font-semibold">Contact Us</h3>
	</div>
</footer>
