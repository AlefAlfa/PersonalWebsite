<script>
	import SegmentTitle from '../../lib/segmentTitle.svelte';
	import Project from './project.svelte';
	import { projects } from '$lib/projects.js';
	import { _ } from 'svelte-i18n';

	let innerWidth;
</script>

<svelte:window bind:innerWidth />

<div id="portfolio" class="flex justify-center">
	<div class="mt-10 mb-5 mx-3 max-w-screen-lg">
		<SegmentTitle box={'🔗Portfolio'} title={$_('projects.title')} />
		{#if innerWidth < 830}
			<div class="flex flex-col mt-5 space-y-2">
				{#each projects as project (project.id)}
					<Project {project} />
				{/each}
			</div>
		{:else if innerWidth > 830}
			<div class="flex justify-center">
				<div class="columns-2 mt-5 gap-2 max-w-screen-lg space-y-2">
					{#each projects as project (project.id)}
						<Project {project} />
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>
