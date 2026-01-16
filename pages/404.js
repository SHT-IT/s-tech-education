// pages/404.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import girl from "../public/images/logo/404-computer.jpg";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <>
      <Head>
        <title>Page Under Development | SHT IT Solution</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-white px-6 py-16">
        
        {/* TEXT */}
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            We&rsquo;re Working on This Page
          </h1>

          <p className="text-lg text-gray-700 mb-2">
            This section is currently under development and will be available soon.
          </p>

          <p className="text-sm text-gray-500 mb-6">
            Thank you for your patience. You&rsquo;ll be redirected to the homepage shortly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/" className="no-underline">
              <span className="inline-block px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                Go to Home
              </span>
            </Link>

            <Link href="/contact-us" className="no-underline">
              <span className="inline-block px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                Contact Us
              </span>
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="mt-10 lg:mt-0 lg:ml-16">
          <Image
            src={girl}
            alt="Page under development"
            width={320}
            height={320}
            className="object-contain"
            priority
          />
        </div>

      </div>
    </>
  );
}
