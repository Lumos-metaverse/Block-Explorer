import { type Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#FF4C3B',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
} satisfies Config;
