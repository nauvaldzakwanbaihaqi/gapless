import Link from 'next/link';
import AuthButton from '@/components/AuthButton';
import { NavLinks } from './NavLinks';

interface NavbarProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function Navbar({ variant = 'light', className = '' }: NavbarProps) {
  return (
    <div className={`w-full bg-transparent relative z-50 ${className}`}>
      <NavLinks variant={variant} authButton={<AuthButton variant={variant} />} />
    </div>
  );
}

