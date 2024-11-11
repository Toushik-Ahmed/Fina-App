'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export default function Homepage() {
  const router = useRouter();

  const currentPath = usePathname();

  const logout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  const getActivePathClass = (path: string): string => {
    console.log(currentPath, path);
    return currentPath === path ? 'text-blue-900 border ' : '';
  };

  const routes: { link: string; title: string }[] = [
    { title: 'Dashboard', link: '/homepage' },
    { title: 'Budget', link: '/homepage/budget' },
    { title: 'Income', link: '/homepage/income' },
    { title: 'Transaction', link: '/homepage/transaction' },
    { title: 'Goals', link: '/homepage/goals' },
  ];

  return (
    <nav className="w-full p-4 border-b sticky top-0 bg-white/70 z-50   backdrop-blur-[2px]">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex gap-8 font-bold">
          {routes.map((route) => (
            <Link
              key={route.link}
              href={route.link}
              className={cn(
                getActivePathClass(route.link),
                'hover:text-blue-700 transition-colors p-2'
              )}
            >
              {route.title}
            </Link>
          ))}
        </div>
        <Button onClick={() => logout()}>Logout</Button>
      </div>
    </nav>
  );
}
