<script>
	import OrangeBox from '../../lib/orangeBox.svelte';
	import { _ } from 'svelte-i18n';
</script>

<div id="contact">
	<div class="mb-20">
		<div class="flex justify-center">
			<OrangeBox text={$_('contact.box')} />
		</div>
		<div class="font-bold flex justify-center text-xl sm:text-3xl mt-2">
			<h1>{$_('contact.title')}</h1>
		</div>
	</div>

	<div class="flex justify-center">
		<div class="space-y-2">
			<div class="flex justify-center">
				<img class="opacity-70 h-6" src="/images/paperplane.png" alt="" />
			</div>
			<div class="flex justify-center">
				<h1 class="font-light text-primary">E-mail:</h1>
			</div>
			<div class="flex justify-center">
				<p class="font-light opacity-60" href="/">lev@lekush.me</p>
			</div>
		</div>
	</div>

	<div class="flex justify-center mt-20">
		<a href="#top">
			<div class="flex space-x-1">
				<h1 class="text-primary opacity-60">{$_("contact.toTop")}</h1>
				<img class="h-5 opacity-60 translate-y-0.5" src="/images/up.png" alt="" />
			</div>
		</a>
	</div>
</div>
