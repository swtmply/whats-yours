import { useSession, signIn } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div>
      <main>
        {session ? (
          <p>Signed in as {session.user.name}</p>
        ) : (
          <button onClick={signIn}>Sign in</button>
        )}
      </main>
    </div>
  );
}
