import type { Config } from 'tailwindcss'

import { colors } from './src/contants/colors.const'

export default {
	content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors
		}
	},
	plugins: []
} satisfies Config
