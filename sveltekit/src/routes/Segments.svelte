<script lang="ts">
	import Student from '$lib/shared/assets/icons/Student.svelte';
	import Visa from '$lib/shared/assets/icons/Visa.svelte';
	import Business from '$lib/shared/assets/icons/Business.svelte';

	import TA_BG from '$lib/shared/assets/images/bg-TA-mobile.png';
</script>

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
			<p class="text-sm">Pass IELTS successfully and unlock new opportunities for living abroad</p>
		</li>

		<li>
			<Business />
			<h3 class="font-semibold">Want to work overseas?</h3>
			<p class="text-sm">Increase your chances of employment abroad with our AI platform</p>
		</li>
	</ul>
</section>
