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
    <div className="min-h-screen bg-engineer-black-500">
      <Head>
        <title>Explore Status</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center max-w-screen-xl min-h-screen mx-auto bg-no-repeat bg-daily">
        <div className="min-h-screen py-6 sm:py-12">
          <div className="relative py-12 sm:max-w-xl sm:mx-auto">
            <div className="relative z-10 px-4 py-12 bg-white border-b border-r border-gray-200 shadow-lg sm:p-20 sm:pt-12 sm:rounded-3xl backdrop-blur-md bg-opacity-30 dark:bg-black dark:bg-opacity-60 dark:border-gray-700 dark:text-white">
              <div className="">
                <img
                  src="https://explore.pa.media/images/pa-media-explore-logo.svg"
                  className="h-[4rem] mx-auto"
                />
                <div className="my-4">
                  <p className="text-base font-bold text-center sm:text-lg">
                    Service Accessibility
                  </p>
                </div>
              </div>
              <div className="max-w-md py-6 mx-auto border-t border-b border-gray-400 dark:border-gray-400">
                <ul>
                  {checks.map((check, index) => (
                    <li key={index} className="mt-4 first:mt-0">
                      <Status url={check.url} mode={check.mode}></Status>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute text-xs text-gray-500 bottom-1 right-6 dark:text-gray-400">
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
