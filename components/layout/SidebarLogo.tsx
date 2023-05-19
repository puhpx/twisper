import { useRouter } from 'next/router';
import Image from 'next/image';

const logoPath = "/images/logo.png";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div className="
      rounded-full
      h-20
      w-20
      p-4
      flex
      items-center
      justify-center
      hover:bg-opacity-10
      cursor-pointer
      transition
    ">
      <Image src={logoPath} alt="App Logo" width={100} height={100} />
    </div>
  )
}

export default SidebarLogo;
