import Link from 'next/link';

import Button from '@/components/Button';

export default function LinkButton({ href, children }) {
  return (
    <Link href={href}>
      <a>
        <Button>{children}</Button>
      </a>
    </Link>
  );
}
