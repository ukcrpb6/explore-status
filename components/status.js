import { BadgeCheckIcon, ExclamationIcon } from '@heroicons/react/solid';
import axios from 'axios';
import isReachable from 'is-reachable';
import useSWR from 'swr';

const selectFetcher = (mode) => {
  switch (mode) {
    case 'is-reachable':
      return isReachable;
    default:
      return (url) => axios.get(url, { timeout: '5000' });
  }
};

export default function Status({ url, mode }) {
  const { data, error } = useSWR(url, selectFetcher(mode));

  const { host } = new URL(url);

  if (error) {
    return (
      <div>
        <div className="flex flex-row items-center">
          <ExclamationIcon className="w-6 h-6 text-red-500"></ExclamationIcon>
          <p className="ml-2 text-xl">{host}</p>
        </div>
        <div className="w-full px-10 mt-2 text-sm">
          <p>Unable to access server - {error.message}</p>
        </div>
      </div>
    );
  }

  if (!data) return 'Loading...';

  return (
    <div>
      <div className="flex flex-row items-center">
        <BadgeCheckIcon className="w-6 h-6 text-green-600"></BadgeCheckIcon>
        <p className="ml-2 text-xl">{host}</p>
      </div>
    </div>
  );
}
