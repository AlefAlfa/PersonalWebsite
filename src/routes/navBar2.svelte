<script>
	import { createEventDispatcher } from 'svelte';
	import { setupi18n } from '$lib/i18n';
	import { _ } from 'svelte-i18n';
	const dispatch = createEventDispatcher();
	export let language;
	let innerWidth;

	function changeLanguage() {
		language === 'en' ? (language = 'de') : (language = 'en');
		setupi18n(language);
		dispatch('languageChange', language);
	}
</script>

<svelte:window bind:innerWidth />

{#if innerWidth <= 667}
	<div id="top" class="flex justify-between mt-4 mx-2">
		<div class="w-10" />
		<div class="flex space-x-2 -translate-x-3">
			<a href="https://github.com/AlefAlfa">
				<img class="h-6 opacity-70" src="/images/github.png" alt="" />
			</a>
			<a href="/">
				<img class="h-6 opacity-70" src="images/linkedin.png" alt="" />
			</a>
		</div>
		<button on:click={changeLanguage}>
			<img src="/images/{language}flag.png" alt="" class="h-6" />
		</button>
	</div>
{:else if innerWidth >= 668}
	<div id="top" class="flex justify-center">
		<div class="w-full flex max-w-screen-lg mt-2 bg-secondary rounded-xl h-10">
			<div class="flex text-xs text-primary font-light justify-start space-x-10 items-center">
				<img class="h-5 w-5 ml-4" src="/images/llogo.png" alt="" />
				<a href="#home">{$_('nav.home')}</a>
				<a href="#about">{$_('nav.about')}</a>
				<a href="#portfolio">Portfolio</a>
				<a href="#skills">Skills</a>
				<a href="#contact">{$_('nav.contact')}</a>
			</div>

			<div class="w-full flex items-center justify-end">
				<button on:click={changeLanguage}>
					<img class="h-6 mr-2" src="/images/{language}flag.png" alt="" />
				</button>
			</div>
		</div>
	</div>
{/if}
