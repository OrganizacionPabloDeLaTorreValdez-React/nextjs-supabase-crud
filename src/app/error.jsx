"use client";

import Link from "next/link";

function ErrorPage({
  error,
  reset
}) {

  return (
    <div
      className="mt-5 mx-auto w-2/4 text-center"
    >
      <h1
        className="text-4xl"
      >There was a problem</h1>
      <p>Error: {error?.message}</p>
      <section 
        className="mt-5 space-x-2"
      >
        <button
          type="button"
          onClick={reset}
          className="mr-2 px-4 rounded bg-slate-600"
        >Try again</button>
        <Link
          href="/"
          className="px-4 rounded bg-blue-800"
        >
          Go Back
        </Link>
      </section>
    </div>
  );
}


export default ErrorPage;