import Image from 'next/image';
import { AuthRequiredError } from './lib/exceptions';

export default function Home() {
  const session = null;
  if (!session) {
    throw new AuthRequiredError(
      'Only authenticated users can access this resource'
    );
  }
  return (
    <main className='flex min-h-screen justify-center items-center'>
      <h1 className='text-2xl text-red-600'>
        This is an auth only page
      </h1>
    </main>
  );
}
