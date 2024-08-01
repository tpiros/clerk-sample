import { Provider } from '@/app/provider';
import { SignIn } from '@clerk/nextjs';
import { Suspense } from 'react';

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-md rounded-md bg-background p-8">
        <div className="space-y-4">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
