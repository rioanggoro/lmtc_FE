import LoginForm from "../components/login-form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="flex w-full flex-col items-center justify-center p-8 md:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Image
              src="/img/LMCT-logo.svg"
              alt="LMCT+"
              width={120}
              height={40}
              className="mb-12"
            />

            <h1 className="mb-2 text-3xl font-bold text-gray-800">
              Welcome to LMCT+!
              <span className="line-animation"></span>
            </h1>

            <p className="mb-8 text-center text-gray-600">
              LMCT Plus is Australia&apos;s Biggest & Best Rewards Club!
            </p>
          </div>

          <LoginForm />
        </div>
      </div>

      <div className="relative hidden bg-sky-400 md:block md:w-1/2">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/img/lmctm.png"
            alt="Secure Vault"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </main>
  );
}
