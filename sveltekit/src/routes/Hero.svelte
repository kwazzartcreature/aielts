<script lang="ts">
	import { mrg } from '$lib/shared/helpers/mrg';

	import OfferMobile from '$lib/shared/assets/images/offer-mobile.png';
</script>

<section
	class={mrg(
		'pb-12 pt-4',
		'grid-cols-2 grid-rows-[3fr_1fr] md:grid md:pb-[50px] md:pl-[40px]',
		'lg:pb-[100px] lg:pl-[80px]'
	)}
>
	<div class={mrg('space-y-3 px-6', 'md:pb-[70px] md:pt-[50px]', 'lg:pt-[100px]')}>
		<h1
			class={mrg(
				'text-h2 font-semibold',
				'md:text-[34px] md:leading-[44px]',
				'lg:text-[45px] lg:leading-[56px]'
			)}
		>
			Prepare for IELTS Speaking with an AI
		</h1>
		<p class={mrg('text-xl', 'md:text-xl', 'lg:text-h3')}>
			Get a month of AI-enhanced preparation at the price of one tutoring session
		</p>
	</div>

	<img class={mrg('col-start-2 row-span-2 block md:w-full')} src={OfferMobile} alt="offer girl" />

	<div class={mrg('flex justify-center px-6 pt-4', 'md:items-start md:justify-start')}>
		<slot name="action" />
	</div>
</section>
