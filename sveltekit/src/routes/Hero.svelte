<script lang="ts">
	import Button from '$lib/shared/ui/Button.svelte';

	import OfferMobile from '$lib/shared/assets/images/offer-mobile.png';
</script>

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
