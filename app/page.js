import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import { LoginButton } from './components/LoginButton';
import { getSession } from '@/app/actions';

export default async function Home() {
  let token = await getSession(); //called from server-side can accept a return value
  return <main>{token?.value ? <SearchForm /> : <LoginButton />}</main>;
}
