import Head from 'next/head';
import Status from '../components/status';

const checks = [
  { url: 'https://explore.pa.media', mode: 'is-reachable' },
  { url: 'https://explore-api-green.pa.media/v2/info' },
  { url: 'https://explore-api-blue.pa.media/v2/info' },
  { url: 'https://explore-menu.pa.media/create-config.json' },
  { url: 'https://explore-partner-content.pa.media/config.json' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-engineer-black">
      <Head>
        <title>Explore Status</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen max-w-screen-2xl mx-auto flex flex-col justify-center bg-daily bg-no-repeat">
        <div className="min-h-screen backdrop-filter backdrop-sepia py-6 sm:py-12">
          <div className="relative py-12 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-12 sm:p-20 sm:pt-12 bg-white shadow-lg sm:rounded-3xl z-10 backdrop-filter backdrop-blur-xl bg-opacity-80 border border-gray-200">
              <div className="border-b border-gray-0">
                <img
                  src="https://explore.pa.media/images/pa-media-explore-logo.svg"
                  className="h-[4rem] mb-8 mx-auto"
                />
              </div>
              <div className="max-w-md  mx-auto py-6 border-t border-b border-gray-400">
                <div className="mx-auto pb-6">
                  <p className="text-base font-bold sm:text-lg text-center">
                    Service Accessibility
                  </p>
                </div>

                <ul>
                  {checks.map((check, index) => (
                    <li key={index} className="mt-4 first:mt-0">
                      <Status url={check.url} mode={check.mode}></Status>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute bottom-1 right-6 text-xs text-gray-600">
                <a href="https://nextjs.org/" target="_blank">
                  Powered by Next.js
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
