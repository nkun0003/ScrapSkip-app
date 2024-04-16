import Image from 'next/image';
import { LoginButton } from './components/LoginButton';
import SearchForm from './components/SearchForm';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <SearchForm />
    </main>
  );
}
