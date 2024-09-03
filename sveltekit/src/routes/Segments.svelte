<script lang="ts">
	import { mrg } from '$lib/shared/helpers/mrg';

	import Student from '$lib/shared/assets/icons/Student.svelte';
	import Visa from '$lib/shared/assets/icons/Visa.svelte';
	import Business from '$lib/shared/assets/icons/Business.svelte';

	import TA_BG from '$lib/shared/assets/images/bg-TA-mobile.png';
</script>

<section class="relative overflow-hidden pb-12 pt-5">
	<img class="absolute left-0 top-0 -z-10 rounded-xl" src={TA_BG} alt="circles background" />
	<h2 class={mrg('px-8 py-4 text-xl font-semibold', 'md:text-h3')}>Take your chance!</h2>

	<ul
		class={mrg(
			'*:bg-bg-white space-y-2 px-6 *:space-y-2 *:rounded-xl *:px-5 *:py-4',
			'md:flex md:space-x-3 md:space-y-0'
		)}
	>
		<li class="md:space-y-3">
			<Student />
			<h3 class={mrg('font-semibold', 'md:text-xl')}>About to study abroad?</h3>
			<p class={mrg('text-sm')}>
				Take the first step towards your future at a prestigious foreign university
			</p>
		</li>

		<li class="md:space-y-3">
			<Visa />
			<h3 class={mrg('font-semibold', 'md:text-xl')}>Planning to emigrate?</h3>
			<p class={mrg('text-sm')}>
				Pass IELTS successfully and unlock new opportunities for living abroad
			</p>
		</li>

		<li class="md:space-y-3">
			<Business />
			<h3 class={mrg('font-semibold', 'md:text-xl')}>Want to work overseas?</h3>
			<p class={mrg('text-sm')}>Increase your chances of employment abroad with our AI platform</p>
		</li>
	</ul>
</section>
