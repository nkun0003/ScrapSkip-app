import Image from 'next/image';
import { LoginButton } from './components/LoginButton';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <LoginButton />
    </main>
  );
}
