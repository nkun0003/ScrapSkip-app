import { logout } from '@/app/actions';
import { redirect } from 'next/navigation';

export default function Logout() {
  return (
    <form
      action={async (formData) => {
        await logout();
        redirect('/');
      }}>
      <button className="p-1 text-slate-300 hover:text-white md:text-2xl">Logout</button>
    </form>
  );
}
