import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo-removebg-preview.png" alt="Alan Phibbs Construction" height={62} width={260} style={{ objectFit: 'contain' }} />
    </Link>
  );
}
