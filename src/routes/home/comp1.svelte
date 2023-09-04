<script>
	import { _ } from 'svelte-i18n';
	import OrangeBox from '../../lib/orangeBox.svelte';
</script>

<div class="flex justify-start ml-5">
	<div>
		<OrangeBox text={$_('home.box')} />
		<h1 class="font-bold text-3xl mt-5 sm:block flex justify-start">Lev</h1>
		<h1 class="font-bold text-3xl sm:block flex justify-start">Lekush</h1>
		<p class="text-xs font-light mt-3">{$_('home.subtitle')}</p>
	</div>
</div>
