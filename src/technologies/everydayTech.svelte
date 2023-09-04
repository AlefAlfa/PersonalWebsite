<script>
	import { everydayTech } from '$lib/tech.js';
	import { _ } from 'svelte-i18n';
</script>

<h1 class="text-center font-light text-sm sm:text-lg text-gray-500 mb-4 mt-6">
	{$_("skills.everyday")}
</h1>
<div class="flex justify-center flex-wrap space-x-4">
	{#each everydayTech as tech}
		<img class="h-8 mt-3" src={tech} alt="" />
	{/each}
</div>
