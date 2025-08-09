import "@/styles/globals.css";
import { Comic_Relief } from 'next/font/google'


const comicRelief = Comic_Relief({
  weight: ['400', '700'], // normal + bold
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
