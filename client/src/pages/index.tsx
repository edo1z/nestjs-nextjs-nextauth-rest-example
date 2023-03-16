import {signIn, signOut, useSession} from 'next-auth/react'
import {Button} from '@nextui-org/react'

export default function Index() {
  const {data:session, status} = useSession();
  const loading = status === 'loading';

  return (
    <div>
      <h1>HOGE</h1>
      {loading && <p>Loading...</p>}
      {!loading && !session && (
        <>
          <Button onClick={e => signIn()}>SignIN</Button><br/>
        </>
      )}
       {!loading && session && (
        <>
          <Button onClick={e => signOut()}>SignOUT</Button>
        </>
      )}
    </div>
  );
}