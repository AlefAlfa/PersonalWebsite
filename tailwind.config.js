/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#FF4800',
        secondary: 'rgba(244, 226, 219)', 
				screens: {
					"scr570": "570px"
				}
			},
		},
	},
	plugins: [],
};
