<script>
	import Home from './home/home.svelte';
	import SkillBox from './skillBoard/skillBox.svelte';
	import AboutMe from './about-me/aboutMe.svelte';
	import ProjectBar from './projects/projectBar.svelte';
	import Technologies from '../technologies/technologies.svelte';
	import Contact from './contact/contact.svelte';
	import BottomBar from './bottomBar.svelte';
	import NavBar2 from './navBar2.svelte';
	import { setupi18n } from '$lib/i18n';

	let language = 'de';

	setupi18n(language);

	function handleLanguageChange(e) {
		language = e.detail;
		setupi18n(language);
	}
</script>

<body class="h-screen bg-gray-100">
	<div>
		<NavBar2 {language} on:languageChange{handleLanguageChange} />
		<Home />
		<div class="bg-secondary h-[1px] w-full my-16" />
		<SkillBox />
		<div class="bg-secondary h-[1px] w-full my-16" />
		<AboutMe />
		<div class="bg-secondary h-[1px] w-full my-16" />
		<ProjectBar />
		<div class="bg-secondary h-[1px] w-full my-16" />
		<Technologies />
		<div class="bg-secondary h-[1px] w-full my-16" />
		<Contact />
		<BottomBar />
	</div>
</body>
