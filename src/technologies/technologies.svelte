<script>
	import SegmentTitle from '../lib/segmentTitle.svelte';
	import EverydayTech from './everydayTech.svelte';
	import PastTech from './pastTech.svelte';
	import OrangeBox from '../lib/orangeBox.svelte';
	import { _ } from 'svelte-i18n';
</script>

<div id="skills" class="flex justify-center mt-10">
	<div>
		<div class="flex sm:justify-center ml-2">
			<OrangeBox text={'🧑‍💻Skills'} />
		</div>
		<div class="font-bold flex sm:justify-center text-xl ml-2 sm:text-3xl mt-2">
			<h1>{$_("skills.title")}</h1>
		</div>
		<EverydayTech />
		<PastTech />
	</div>
</div>
