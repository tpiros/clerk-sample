import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-md rounded-md bg-white p-8">
        <div className="space-y-4">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
