import { Plus_Jakarta_Sans } from 'next/font/google'

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const fonts = {
  plus_jakarta_sans,
}

export const useFonts = {
  heading: 'var(--font-sans)',
  body: 'var(--font-sans)',
}