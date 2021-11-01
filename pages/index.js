import Head from 'next/head';
import Status from '../components/status';

const urls = [
  'https://explore-api-production-green.pamedia.io/v2/info',
  'https://explore-api-production-blue.pamedia.io/v2/info',
  'https://explore-menu.pa.media/create-config.json',
  'https://explore-partner-content.pa.media/config.json',
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Explore Status</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <ul>
          {urls.map((url, index) => (
            <li key={index} className="flex flex-col mt-4">
              <Status url={url}></Status>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
