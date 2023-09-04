<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let webBg = 'bg-secondary';
	let apiBg = 'bg-gray-100';
	let iosBg = 'bg-gray-100';

	function toggleWeb(title) {
		if (webBg === 'bg-gray-100') {
			webBg = 'bg-secondary';
			apiBg = 'bg-gray-100';
			iosBg = 'bg-gray-100';
			dispatch('SkillChange', 'Web');
		}
	}

	function toggleAPIs(title) {
		if (apiBg === 'bg-gray-100') {
			apiBg = 'bg-secondary';
			webBg = 'bg-gray-100';
			iosBg = 'bg-gray-100';
			dispatch('SkillChange', 'APIs');
		}
	}

	function toggleIOS(title) {
		if (iosBg === 'bg-gray-100') {
			iosBg = 'bg-secondary';
			webBg = 'bg-gray-100';
			apiBg = 'bg-gray-100';
			dispatch('SkillChange', 'IOS');
		}
	}
</script>

<div class="flex justify-around sm:justify-center sm:space-x-10">
	<button
		on:click={toggleWeb}
		class=" w-1/4 aspect-[4/3] sm:w-36 sm:h-28 translate-x-3 rounded-xl border border-primary border-opacity-50 {webBg}"
	>
		<div class="flex justify-center">
			<img class="w-1/2 mt-1.5 sm:w-16" src="/images/globe.png" alt="" />
		</div>
		<h1 class="font-semibold">Web</h1>
	</button>

	<button
		on:click={toggleAPIs}
		class=" w-1/4 aspect-[4/3] sm:w-36 sm:h-28 rounded-xlborder border rounded-xl border-primary border-opacity-50 {apiBg}"
	>
		<div class="flex justify-center">
			<img class="w-1/2 mt-1.5 sm:w-16" src="/images/api.png" alt="" />
		</div>
		<h1 class="font-semibold">APIs</h1>
	</button>

	<button
		on:click={toggleIOS}
		class=" sm:w-36 sm:h-28 w-1/4 aspect-[4/3] -translate-x-3 rounded-xl border border-primary border-opacity-50 {iosBg}"
	>
		<div class="flex justify-center">
			<img class="w-1/2 mt-1.5 sm:w-16" src="/images/ios.png" alt="" />
		</div>
		<h1 class="font-semibold">IOS</h1>
	</button>
</div>
