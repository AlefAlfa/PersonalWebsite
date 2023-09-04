<script>
	import { _ } from 'svelte-i18n';
	export let skill;
	let innerWidth;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth > 580}
	<div class="flex justify-center mt-4">
		<div class="w-9/12 bg-secondary rounded-lg h-24 sm:w-[430px]">
			<div class=" pt-2 justify-around sm:mt-5">
				<div class="flex justify-between">
					<h1 class="text-xs text-primary font-light text-center ml-20">{$_('tech.languages')}</h1>
					<h1 class="text-xs text-primary font-light text-center mr-24">Frameworks</h1>
				</div>

				<div class="flex justify-between">
					<h1
						class="font-bold translate-x-2 text-center text-primary mb-1 text-xl sm:text-2xl {skill.ml} "
					>
						{skill.languages}
					</h1>
					<h1 class="font-bold text-center text-primary text-xl sm:text-2xl {skill.mf}">
						{skill.frameworks}
					</h1>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="flex justify-center mt-4">
		<div class="w-9/12 bg-secondary rounded-lg h-24 sm:w-[430px]">
			<div class="sm:flex pt-2 sm:justify-around sm:mt-5">
				<div>
					<h1 class="text-xs text-primary font-light text-center">{$_('tech.languages')}</h1>
					<h1 class="font-bold text-center text-primary -translate-y-1.5 mb-1 text-xl sm:text-2xl">
						{skill.languages}
					</h1>
				</div>

				<div>
					<h1 class="text-xs text-primary font-light text-center">Frameworks</h1>
					<h1 class="font-bold text-center text-primary -translate-y-1.5 text-xl sm:text-2xl">
						{skill.frameworks}
					</h1>
				</div>
			</div>
		</div>
	</div>
{/if}
