/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: "#ff3300",
				'brand-darker': "#d7370f",
				isabelline: '#f8f6f2',
				'isabelline-light': 'rgb(252, 251, 251)',
				paledogwood: '#fcd4c5',
				goldengatebridge: '#e84e0f',
				olivine: '#aab46f',
				darkmossgreen: '#575e31',
				carolinablue: '#8fbee0',
				celestialblue: '#4a97ce',
			}
		},
	},
	plugins: [
		require('daisyui'),
	],
	daisyui: {
		themes: false
	}
}
