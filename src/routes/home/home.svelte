<script>
	import Comp1 from './comp1.svelte';
	import Comp2 from './comp2.svelte';

	let innerWidth;
</script>

<svelte:window bind:innerWidth />
<div id="home" class="flex justify-evenly">
	<div class="mt-5">
		{#if innerWidth > 667}
			<div class="flex justify-evenly max-w-screen-lg items-center">
				<Comp1 />
				<img
					src="/images/AvatarAndIcons.png"
					alt=""
					class="w-5/12 lg:w-[450px] -translate-x-8 lg:mx-32"
				/>
				<Comp2 />
			</div>
		{:else}
			<div class="flex flex-col">
				<div class="mb-10 flex justify-center ml-3">
					<img class="" src="/images/AvatarAndIcons.png" alt="" />
				</div>
				<div class="mb-10">
					<Comp1 />
				</div>
				<div>
					<Comp2 />
				</div>
			</div>
		{/if}
	</div>
</div>
