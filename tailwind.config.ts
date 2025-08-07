import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Dental Studio Brand Colors
				'dental-primary': 'hsl(var(--dental-primary))',
				'dental-primary-light': 'hsl(var(--dental-primary-light))',
				'dental-primary-dark': 'hsl(var(--dental-primary-dark))',
				'dental-accent': 'hsl(var(--dental-accent))',
				'dental-accent-light': 'hsl(var(--dental-accent-light))',
				
				// Neutral Palette
				'neutral-50': 'hsl(var(--neutral-50))',
				'neutral-100': 'hsl(var(--neutral-100))',
				'neutral-200': 'hsl(var(--neutral-200))',
				'neutral-300': 'hsl(var(--neutral-300))',
				'neutral-600': 'hsl(var(--neutral-600))',
				'neutral-700': 'hsl(var(--neutral-700))',
				'neutral-800': 'hsl(var(--neutral-800))',
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					hover: 'hsl(var(--secondary-hover))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					hover: 'hsl(var(--accent-hover))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					accent: 'hsl(var(--card-accent))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'dental': 'var(--radius)',
				'dental-lg': 'var(--radius-large)',
				'full': 'var(--radius-full)'
			},
			boxShadow: {
				'dental': 'var(--shadow-dental)',
				'dental-md': 'var(--shadow-md)',
				'dental-lg': 'var(--shadow-lg)'
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'112': '28rem',
				'128': '32rem'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
