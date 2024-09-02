<script lang="ts">
	import Button from '$lib/shared/ui/Button.svelte';
	import Accordion from '$lib/shared/ui/Accordion.svelte';

	import Hero from './Hero.svelte';
	import Segments from './Segments.svelte';
	import ServiceQuality from './ServiceQuality.svelte';
	import PhoneFeatures from './PhoneFeatures.svelte';
	import Feedback from './Feedback.svelte';

	import Logo from '$lib/shared/assets/icons/Logo.svelte';
	import Faq from './FAQ.svelte';
</script>

<header class="flex items-center justify-between px-4 py-6">
	<a href="/"><Logo /></a>
	<Button variant="outline" size="small">Log In</Button>
</header>

<main>
	<Hero />

	<Segments />

	<ServiceQuality />

	<PhoneFeatures />

	<Feedback />

	<Faq />
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
