import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

const PPMori = localFont({
  src: [
    {
      path: './PPMori-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './PPMori-Bold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './PPMori-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

const OTJubilee = localFont({
  src: './OTJubilee-Platinum.woff2',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html,
        p,
        a,
        button,
        input,
        select,
        textarea,
        span,
        div {
          font-family: ${PPMori.style.fontFamily};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${OTJubilee.style.fontFamily};
        }
        .OTJubilee {
          font-family: ${OTJubilee.style.fontFamily};
        }
        .PPMori {
          font-family: ${PPMori.style.fontFamily};
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
