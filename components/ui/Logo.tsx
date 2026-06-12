import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo-removebg-preview.png"
        alt="Alan Phibbs Construction"
        height={53}
        width={221}
        className="dark:brightness-0 dark:invert"
        style={{ objectFit: 'contain' }}
      />
    </Link>
  );
}
