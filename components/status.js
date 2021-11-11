import { BadgeCheckIcon, ExclamationIcon } from '@heroicons/react/solid';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url) => axios.get(url, { timeout: '5000' });

export default function Status({ url }) {
  const { data, error } = useSWR(url, fetcher);

  const { host } = new URL(url);

  if (error) {
    return (
      <div>
        <div className="flex flex-row items-center">
          <ExclamationIcon className="h-6 w-6 text-red-500"></ExclamationIcon>
          <p className="text-xl ml-2">{host}</p>
        </div>
        <div className="text-sm px-10 mt-2 w-full">
          <p>
            Unable to access{' '}
            <span className="underline text-blue-600">{host}</span> -{' '}
            {error.message}
          </p>
        </div>
      </div>
    );
  }

  if (!data) return 'Loading...';

  return (
    <div>
      <div className="flex flex-row items-center">
        <BadgeCheckIcon className="h-6 w-6 text-green-600"></BadgeCheckIcon>
        <p className="text-xl ml-2">{host}</p>
      </div>
    </div>
  );
}
