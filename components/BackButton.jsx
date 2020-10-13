import { useRouter } from 'next/router';
import { ArrowLeft } from 'react-feather';

import Button from '@/components/Button';

export default function BackButton() {
  const router = useRouter();

  return (
    <Button iconLeft={ArrowLeft} clickHandler={router.back}>
      Back
    </Button>
  );
}
