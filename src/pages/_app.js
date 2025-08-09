import "@/styles/globals.css";
import { Comic_Relief } from 'next/font/google'


const comicRelief = Comic_Relief({
  weight: ['400', '700'], // normal + bold
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}






// import "@/styles/globals.css";
// import { Comic_Relief } from "next/font/google";

// // Load Comic Relief font
// const comicRelief = Comic_Relief({
//   weight: ["400", "700"], // normal + bold
//   subsets: ["latin"],
// });

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <main className={comicRelief.className}>
//       <Component {...pageProps} />
//     </main>
//   );
// }