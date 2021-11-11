import Head from 'next/head';
import Status from '../components/status';

const urls = [
  'https://explore-api-green.pa.media/v2/info',
  'https://explore-api-production-blue.pamedia.io/v2/info',
  'https://explore-menu.pa.media/create-config.json',
  'https://explore-partner-content.pa.media/config.json',
  // 'https://httpstat.us/404/cors',
];

export default function Home() {
  return (
    <div className="min-h-screen bg-engineer-black">
      <Head>
        <title>Explore Status</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen max-w-screen-2xl mx-auto flex flex-col justify-center bg-daily bg-no-repeat">
        <div className="min-h-screen backdrop-filter backdrop-sepia py-6 sm:py-12 ">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 z-10 backdrop-filter backdrop-blur-xl bg-opacity-80 border border-gray-200">
              <div>
                <img
                  src="https://explore.pa.media/images/pa-media-explore-logo.svg"
                  className="h-[4rem] mb-10 mx-auto"
                />
              </div>
              <div className="max-w-md mx-auto">
                <ul>
                  {urls.map((url, index) => (
                    <li key={index} className="mt-4">
                      <Status url={url}></Status>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
