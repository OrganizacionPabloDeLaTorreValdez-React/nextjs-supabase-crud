import { createBrowserClient } from "@supabase/ssr";
import { useMemo, useState } from "react";

function Landing() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorSignIn, setErrorSignIn] = useState('');
  const supabase = useMemo(() => {
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_KEY,
    );
  }, []);

  const callSubmit = async (e) => {
    e.preventDefault();

    let {data, error} = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    error ?
    setErrorSignIn(error.message) :
    setErrorSignIn('');
  }

  return (
    <div
        className="mt-5 p-2 mx-auto bg-slate-800 w-2/5 flex flex-col items-center gap-y-3"
    >
      <form
        action=""
        onSubmit={callSubmit}
        className="flex flex-col items-center gap-y-3"
      >
        <h1
          className="text-2xl capitalize"
        >Iniciar Sesión</h1>
        <section
          className="flex flex-col space-y-2"
        >
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            name="email"
            type="email" 
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="text-black"
          />
          <label htmlFor="password">Password:</label>
          <input 
            id="password"
            name="password"
            type="password" 
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="text-black"
          />
        </section>
        <button
          type="submit"
          className="px-5 rounded bg-green-800 hover:bg-green-800/50"
        >
          Sign Up
        </button>
      </form>
      <p
        className="text-red-700"
      >
        {errorSignIn}
      </p>
    </div>
  );
}

export default Landing;