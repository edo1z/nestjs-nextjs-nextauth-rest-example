import {signIn, signOut, useSession} from 'next-auth/react'

export default function Index() {
  const {data:session, status} = useSession();
  const loading = status === 'loading';

  return (
    <div>
      <h1>HOGE</h1>
      {loading && <p>Loading...</p>}
      {!loading && !session && (
        <>
          <button onClick={e => signIn()}>SignIN</button><br/>
        </>
      )}
       {!loading && session && (
        <>
          <button onClick={e => signOut()}>SignOUT</button>
        </>
      )}
    </div>
  );
}