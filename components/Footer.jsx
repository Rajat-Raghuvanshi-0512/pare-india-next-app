'use client';
import { useEffect, useState } from 'react';
import { Logo } from '@/utils/assets';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const darkNavLinks = [
  '/about/',
  '/',
  '/contact/',
  '/career-form/',
  '/product/linea/',
  '/application/',
  '/blog/',
  '/faq/',
  '/gallery/',
  '/product/duo/',
  '/product/arch/',
  '/product/linea/',
  '/product/soffit/',
  '/product/pyramid/',
  '/product/norma/',
  '/product/vertica/',
  '/product/wave/',
  '/product/louvers/',
];
const darkNavLinksSm = [
  '/about/',
  '/career-form/',
  '/product/linea/',
  '/application/',
  '/blog/',
  '/product/linea/',
  '/product/duo/',
  '/product/arch/',
  '/product/linea/',
  '/product/soffit/',
  '/product/pyramid/',
  '/product/norma/',
  '/product/vertica/',
  '/product/wave/',
  '/product/louvers/',
];

const FooterSm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (darkNavLinksSm.includes(pathname)) {
      setDark(true);
    } else {
      setDark(false);
    }
  }, [pathname]);
  return (
    <section
      className={` ${
        dark ? 'bg-[#151515] ' : 'bg-red-base'
      } p-4 font-montserrat text-white`}
    >
      <div className="mr-10  text-xl font-light uppercase">
        Let&apos;s work together to create the space of your dreams.
      </div>
      <p className="py-5 text-3xl font-semibold">LET’S CONNECT.</p>
      <div className="flex gap-7 text-xs uppercase">
        <Link href={'https://www.instagram.com/pareindia/'} target="_blank">
          Instagram
        </Link>
        <Link href={'https://www.facebook.com/Pareinnov.'} target="_blank">
          Facebook
        </Link>
        <Link
          href={'https://www.linkedin.com/company/pareindia/'}
          target="_blank"
        >
          Linkedin
        </Link>
      </div>
      <p className="mr-14 py-4 text-xs">
        Transform your living spaces with PARÉ&apos;s innovative, sustainable,
        and high-quality products . Let&apos;s work together to create a space
        that reflects your unique style and create unforgettable memories.
      </p>
      <div>
        <div className=" w-20 rounded-full bg-white px-2 py-1">
          <Image
            src={Logo}
            alt="logo"
            width={60}
            height={24.27}
            className={'object-contain'}
          ></Image>
        </div>
        <div className="pt-3 text-xs">COOKIE POLICY</div>
        <div
          className="py-1 text-xs"
          onClick={() => router.push('/privacy-policy')}
        >
          PRIVACY POLICY
        </div>
      </div>
      <div className="mb-3 mt-6 text-center text-xs">
        © Pare India Limited 2023 | Website by Pixy Square
      </div>
    </section>
  );
};
const FooterLg = ({ dark }) => {
  return (
    <section
      className={` ${
        dark ? 'bg-[#151515] text-white' : ''
      } md:px-10 md:pt-10  lg:px-20 lg:pt-14 2xl:px-40`}
    >
      <div className="grid font-montserrat md:grid-cols-10">
        <div
          className={`col-span-5 flex flex-col justify-between border-[0.01rem] border-opacity-50 md:p-3 lg:p-5 ${
            dark ? 'border-white' : 'border-black-base'
          }`}
        >
          <Image
            src={Logo}
            alt="logo"
            width={140}
            height={140}
            className={'object-contain'}
          />
          <div className="w-[80%] text-base font-normal leading-5 tracking-tight">
            Transform your living spaces with PARÉ&apos;s innovative,
            sustainable, and high-quality products. Let&apos;s work together to
            create a space that reflects your unique style and create
            unforgettable memories.
          </div>
        </div>
        <div className="col-span-2 flex flex-col">
          <div
            className={`flex h-1/2 flex-col border-t-[0.01rem] border-opacity-50 text-center md:p-3 lg:p-5 ${
              dark ? 'border-white' : 'border-black-base'
            }`}
          >
            <ul>
              <li className="mb-4 font-metropolis  font-medium tracking-wider md:text-2xl lg:text-3xl">
                LEGAL
              </li>
              <li className="mb-2">
                <Link href={'/'}>COOKIE POLICY</Link>
              </li>
              <li>
                <Link href={'/privacy-policy'}>PRIVACY POLICY</Link>
              </li>
            </ul>
          </div>
          <div
            className={`flex h-2/3 w-auto flex-col border-y-[0.01rem] ${
              dark ? 'border-white' : 'border-black-base'
            } border-opacity-50 text-center md:p-3 lg:p-5`}
          >
            <ul>
              <li className="mb-4 font-metropolis  font-medium tracking-wider md:text-2xl lg:text-3xl">
                SOCIAL
              </li>
              <li className="mb-2">
                <Link
                  href={'https://www.instagram.com/pareindia/'}
                  target="_blank"
                  className="hover:text-red-base"
                >
                  INSTAGRAM
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href={'https://www.facebook.com/Pareinnov.'}
                  target="_blank"
                  className="hover:text-red-base"
                >
                  FACEBOOK
                </Link>
              </li>
              <li>
                <Link
                  href={'https://www.linkedin.com/company/pareindia/'}
                  target="_blank"
                  className="hover:text-red-base"
                >
                  LINKEDIN
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`col-span-3 flex  flex-col border-[0.01rem] ${
            dark ? 'border-white' : 'border-black-base'
          } border-opacity-50 text-center md:p-3 lg:p-5`}
        >
          <ul>
            <li className="mb-4 font-metropolis font-medium tracking-wider md:text-xl lg:text-3xl">
              MENU
            </li>
            <li className="mb-3">
              <Link href={'/'} className="hover:text-red-base">
                HOME
              </Link>
            </li>
            <li className="mb-3">
              <Link href={'/about'} className="hover:text-red-base">
                ABOUT
              </Link>
            </li>
            <li className="mb-3">
              <Link href={'/products'} className="hover:text-red-base">
                PRODUCTS
              </Link>
            </li>
            <li className="mb-3">
              <Link href={'/gallery'} className="hover:text-red-base">
                GALLERY
              </Link>
            </li>
            <li className="mb-3">
              <Link href={'/blog'} className="hover:text-red-base">
                BLOG
              </Link>
            </li>
            <li className="mb-3">
              <Link href={'/resources'} className="hover:text-red-base">
                RESOURCES
              </Link>
            </li>
            <li className="mb-3">
              <Link href={'/careers'} className="hover:text-red-base">
                CAREERS
              </Link>
            </li>
            <li className="mb-3">
              <Link href={'/contact'} className="hover:text-red-base">
                CONTACTS
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-3 text-center font-montserrat">
        © Pare India Limited 2023 | Website by Pixy Square
      </div>
    </section>
  );
};

const Footer = () => {
  const pathname = usePathname();
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (darkNavLinks.includes(pathname)) {
      setDark(true);
    } else {
      setDark(false);
    }
  }, [pathname]);

  return (
    <>
      <div className="md:hidden">
        <FooterSm />
      </div>
      <div className="hidden md:block">
        <FooterLg dark={dark} />
      </div>
    </>
  );
};

export default Footer;
