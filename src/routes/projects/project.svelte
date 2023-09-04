<script>
	import OrangeBox from '../../lib/orangeBox.svelte';
	import { _ } from 'svelte-i18n';

	export let project;
	let innerWidth;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth < 420}
	<a href={project.url}>
		<div class="p-4 rounded-xl border border-primary border-opacity-40">
			<div class="flex">
				<div class="w-2/3">
					<h1 class="font-bold mb-2">{project.title}</h1>
					<p class="font-light text-sm mb-3">{$_(`projects.${project.description}`)}</p>

					<div class="mt-2 w-[170px] space-x-2">
						{#each project.tags as tag}
							<OrangeBox text={tag} />
						{/each}
					</div>
				</div>
				<div class="">
					<img class="ml-2 aspect-square rounded-xl object-cover" src={project.imageUrl} alt="" />
				</div>
			</div>
		</div>
	</a>
{:else if innerWidth > 420 && innerWidth < 840}
	<div class="flex justify-center">
		<a href={project.url}>
			<div class="w-[400px] p-4 rounded-xl border border-primary border-opacity-40">
				<div class="flex">
					<div>
						<h1 class="font-bold mb-2">{project.title}</h1>
						<p class="font-light text-sm mb-3">{$_(`projects.${project.description}`)}</p>

						<div class="mt-2 w-[170px] space-x-2">
							{#each project.tags as tag}
								<OrangeBox text={tag} />
							{/each}
						</div>
					</div>
					<div class="">
						<img class="ml-2 aspect-square rounded-xl object-cover" src={project.imageUrl} alt="" />
					</div>
				</div>
			</div>
		</a>
	</div>
{:else}
	<div class="flex justify-center">
		<a href={project.url}>
			<div class="w-[420px] p-4 rounded-xl border border-primary border-opacity-40">
				<div class="flex">
					<div>
						<h1 class="font-bold mb-2">{project.title}</h1>
						<p class="font-light text-sm mb-3">{$_(`projects.${project.description}`)}</p>

						<div class="mt-2 w-[170px] space-x-2">
							{#each project.tags as tag}
								<OrangeBox text={tag} />
							{/each}
						</div>
					</div>
					<div class="">
						<img class="ml-2 aspect-square rounded-xl object-cover" src={project.imageUrl} alt="" />
					</div>
				</div>
			</div>
		</a>
	</div>
{/if}
