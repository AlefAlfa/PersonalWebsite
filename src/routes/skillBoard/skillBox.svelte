<script>
	import SkillButtons from './skillButtons.svelte';
	import SkillField from './skillField.svelte';

	let skills = [
		{
			languages: 'JavaScript',
			frameworks: 'Svelte/SvelteKit',
			ml: 'ml-10',
			mf: 'mr-10',
		},
		{
			languages: 'Python',
			frameworks: 'Flask/FastAPI',
			ml: 'ml-14',
			mf: 'mr-14',
		},
		{
			languages: 'Swift',
			frameworks: 'SwiftUI/Xcode',
			ml: 'ml-[67px]',
			mf: 'mr-12',
		},
	];
  
  //ml: 'ml-[74px]',
	//		'mf: 'mr-12',


	let skill = skills[0];

	function handleSkillChange(event) {
		if (event.detail === 'Web') {
			skill = skills[0];
		} else if (event.detail === 'APIs') {
			skill = skills[1];
		} else if (event.detail === 'IOS') {
			skill = skills[2];
		}
	}

</script>

<div class=" mt-16">
	<SkillButtons on:SkillChange={handleSkillChange} />
	<SkillField {skill} />
</div>
