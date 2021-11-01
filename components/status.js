import { CheckIcon, ExclamationIcon } from '@heroicons/react/solid';
import useSWR from 'swr';

const fetchWithTimeout = (url) =>
  Promise.race([
    fetch(url),
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error('timeout')), 10000);
    }),
  ]);

const fetcher = (url) => fetchWithTimeout(url).then((res) => res.json());

export default function Status({ url }) {
  const { data, error } = useSWR(url, fetcher);

  if (error) {
    return (
      <div>
        <div className="flex flex-row items-center">
          <ExclamationIcon className="h-5 w-5 text-red-500"></ExclamationIcon>
          <p className="text-xl ml-2">{url}</p>
        </div>
        {data.error && <p className="text-xs mt-2">{data.error}</p>}
      </div>
    );
  }

  if (!data) return 'Loading...';

  return (
    <div>
      <div className="flex flex-row items-center">
        <CheckIcon className="h-5 w-5 text-green-500"></CheckIcon>
        <p className="text-xl ml-2">{url}</p>
      </div>
    </div>
  );
}
