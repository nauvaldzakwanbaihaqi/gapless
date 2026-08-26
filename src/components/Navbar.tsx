import Link from 'next/link';
import AuthButton from '@/components/AuthButton';
import { NavLinks } from './NavLinks';

export function Navbar() {
  return (
    <div className="w-full bg-transparent relative z-50">
      <NavLinks authButton={<AuthButton />} />
    </div>
  );
}
