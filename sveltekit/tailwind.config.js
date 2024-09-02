/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Manrope', 'sans-serif']
			},
			fontSize: {
				h2: ['32px', '40px'],
				h3: ['24px', '32px']
			},
			fontWeight: {
				semibold: '600',
				regular: '400',
				bold: '700'
			},
			colors: {
				'bg-white': 'var(--bg-white)',
				'bg-gray': 'var(--bg-gray)',
				danger: 'var(--danger)',
				'bg-danger': 'var(--bg-danger)',
				whisper: {
					DEFAULT: 'var(--whisper-200)',
					100: 'var(--whisper-100)',
					150: 'var(--whisper-150)',
					200: 'var(--whisper-200)',
					300: 'var(--whisper-300)',
					500: 'var(--whisper-500)',
					700: 'var(--whisper-700)',
					950: 'var(--whisper-950)'
				},
				rapture: {
					DEFAULT: 'var(--rapture-500)',
					50: 'var(--rapture-50)',
					100: 'var(--rapture-100)',
					150: 'var(--rapture-150)',
					200: 'var(--rapture-200)',
					300: 'var(--rapture-300)',
					400: 'var(--rapture-400)',
					500: 'var(--rapture-500)',
					600: 'var(--rapture-600)',
					700: 'var(--rapture-700)',
					800: 'var(--rapture-800)',
					900: 'var(--rapture-900)',
					950: 'var(--rapture-950)'
				},
				mindaro: {
					DEFAULT: 'var(--mindaro-300)',
					50: 'var(--mindaro-50)',
					100: 'var(--mindaro-100)',
					150: 'var(--mindaro-150)',
					200: 'var(--mindaro-200)',
					300: 'var(--mindaro-300)',
					400: 'var(--mindaro-400)',
					500: 'var(--mindaro-500)',
					600: 'var(--mindaro-600)',
					700: 'var(--mindaro-700)',
					800: 'var(--mindaro-800)',
					900: 'var(--mindaro-900)',
					950: 'var(--mindaro-950)'
				},
				chimera: {
					DEFAULT: 'var(--chimera-600)',
					50: 'var(--chimera-50)',
					100: 'var(--chimera-100)',
					150: 'var(--chimera-150)',
					200: 'var(--chimera-200)',
					300: 'var(--chimera-300)',
					400: 'var(--chimera-400)',
					500: 'var(--chimera-500)',
					600: 'var(--chimera-600)',
					700: 'var(--chimera-700)',
					800: 'var(--chimera-800)',
					900: 'var(--chimera-900)',
					950: 'var(--chimera-950)'
				}
			},
			borderRadius: {
				DEFAULT: 'calc(var(--radius) - 4px)',
				tiny: 'calc(var(--radius) - 12px)',
				sm: 'calc(var(--radius) - 8px)',
				md: 'calc(var(--radius) - 4px)',
				lg: 'calc(var(--radius))',
				xl: 'calc(var(--radius) + 4px)'
			}
		}
	},
	plugins: []
};
