import { Spinner } from '@material-tailwind/react';

export default function BaseSpinner() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Spinner className="h-16 w-16 text-gray-900/50 " />;
    </div>
  );
}
