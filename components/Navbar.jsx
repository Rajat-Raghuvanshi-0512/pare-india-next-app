'use client';
import {
  BackButton,
  BurgerMenu,
  BurgerMenuBlack,
  CloseIcon,
  FbIcon,
  InstaIcon,
  LinkedInIcon,
  Logo,
} from '@/utils/assets';
import { Drawer } from './custom';
import { useModal } from '../utils/custom-hooks';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const greNavRoutes = [
  '/about/',
  '/products/',
  '/careers/',
  '/faq/',
  '/downloads/',
  '/gallery/',
  '/privacy-policy/',
  '/blog/1/',
];

const navLinks = [
  {
    text: 'home',
    path: '/',
  },
  {
    text: 'about',
    path: '/about',
  },
  {
    text: 'products',
    path: '/products',
    dropdown: ['Innov+', 'Easy+', 'Dura+', 'Innov2+'],
    links: ['product/1/', 'product/2/', 'product/3/', 'product/4/'],
  },
  {
    text: 'gallery',
    path: '/gallery',
  },
  {
    text: 'resources',
    dropdown: ['faq', 'blog', 'downloads'],
    links: ['faq', 'blog', 'downloads'],
  },
  {
    text: 'contact us',
    path: '/contact',
  },
];

const navLinksSm = [
  {
    text: 'home',
    path: '/',
  },
  {
    text: 'about',
    path: '/about',
  },
  {
    text: 'products',
    dropdown: ['Innov+', 'Easy+', 'Dura+', 'Innov2+'],
    links: ['product/1/', 'product/2/', 'product/3/', 'product/4/'],
  },
  {
    text: 'gallery',
    path: '/gallery',
  },
  {
    text: 'blog',
    path: '/blog',
  },
  {
    text: 'careers',
    path: '/careers',
  },
  {
    text: 'contact us',
    path: '/contact',
  },
  {
    text: 'resources',
    dropdown: ['faq', 'blog', 'downloads'],
  },
];

const NavSm = ({ isScrolled }) => {
  const { isOpen, closeModal, openModal } = useModal();
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav
      className={`fixed left-0 top-0 z-[100] w-full ${
        isScrolled || greNavRoutes.includes(pathname)
          ? 'bg-[#EBEBEB]'
          : 'text-white'
      } duration-300 `}
    >
      <div className="mx-4 flex items-center justify-between">
        <div className="flex items-end">
          <Image
            src={Logo}
            width={500}
            height={400}
            alt="logo"
            className="h-16 w-24 object-contain sm:h-20 sm:w-32"
          />
        </div>
        <div onClick={openModal}>
          <Image
            src={BurgerMenu}
            className={`h-11 w-11 object-contain sm:h-14 sm:w-14 ${
              !isScrolled && !greNavRoutes.includes(pathname) ? '' : 'hidden'
            }`}
            alt="burger-menu"
          />
          <Image
            src={BurgerMenuBlack}
            className={`h-11 w-11 object-contain sm:h-14 sm:w-14 ${
              isScrolled || greNavRoutes.includes(pathname) ? '' : 'hidden'
            }`}
            alt="burger-menu-black"
          />
        </div>
        <Drawer isOpen={isOpen}>
          <div className="flex h-screen flex-col items-end gap-5 overflow-hidden pb-10">
            <div className="pt-5">
              <Image
                src={resourcesOpen || productsOpen ? BackButton : CloseIcon}
                alt="close"
                className="ml-auto h-10 w-10"
                onClick={
                  resourcesOpen || productsOpen
                    ? () => {
                        setResourcesOpen(false);
                        setProductsOpen(false);
                      }
                    : closeModal
                }
              />
            </div>
            <ul
              className={` mt-auto flex w-full flex-col items-end justify-end gap-7 text-white`}
            >
              {navLinksSm.map((link) => {
                if (
                  (productsOpen && link.text !== 'products') ||
                  (resourcesOpen && link.text !== 'resources')
                )
                  return null;
                return (
                  <li key={link.text}>
                    {resourcesOpen && (
                      <div className="flex flex-col items-end gap-7 pb-10">
                        {link?.dropdown?.map((item) => (
                          <div key={item}>
                            <Link
                              href={`/${item}`}
                              className="font-montserrat text-3xl uppercase"
                              onClick={closeModal}
                            >
                              {item}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                    {productsOpen && (
                      <div className="flex flex-col items-end gap-7 pb-10">
                        {link?.dropdown?.map((item, id) => (
                          <div key={item}>
                            <Link
                              href={`/${link.links[id]}`}
                              className="font-montserrat text-3xl uppercase"
                              onClick={closeModal}
                            >
                              {item}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                    <Link
                      href={`${link.path || ''}`}
                      className="ml-10 w-full text-right font-montserrat text-3xl uppercase"
                      onClick={
                        link.text === 'resources'
                          ? () => setResourcesOpen(true)
                          : link.text === 'products'
                          ? () => setProductsOpen(true)
                          : closeModal
                      }
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-end justify-end gap-2 pt-5">
              <Image
                src={InstaIcon}
                alt="insta"
                className="h-8 w-8 object-contain"
              />
              <Image src={FbIcon} alt="fb" className="h-8 w-8 object-contain" />
              <Image
                src={LinkedInIcon}
                alt="Ld"
                className="h-8 w-8 object-contain"
              />
            </div>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

const NavMd = ({ isScrolled, hide }) => {
  const pathname = usePathname();
  return (
    <nav
      className={`fixed z-50 w-full ${
        isScrolled || greNavRoutes.includes(pathname)
          ? 'bg-[#EBEBEB]'
          : pathname === '/'
          ? 'text-black'
          : 'text-white'
      } ${hide ? '-translate-y-[100%]' : 'translate-y-0'} duration-300`}
    >
      <div className="mx-10 flex items-center justify-between border-b-2">
        <div className="flex items-end">
          <Image
            src={Logo}
            width={400}
            height={400}
            alt="logo"
            className="h-12 w-20 object-contain"
          />
        </div>
        <div>
          <ul className="flex items-center justify-center gap-3">
            {navLinks.map((link) => (
              <li
                key={link.text}
                className={`group relative p-2 duration-200 ${
                  link?.dropdown && 'hover:bg-[#EBEBEB]'
                } `}
              >
                <Link
                  href={`${link.path}`}
                  className="font-montserrat text-sm uppercase hover:text-red-base"
                >
                  {link.text}
                </Link>
                <div
                  className={`pointer-events-none absolute left-0 top-[100%] w-full flex-col gap-3 p-2 pt-3 text-center text-black opacity-0 duration-200 group-hover:pointer-events-auto group-hover:opacity-100 ${
                    link?.dropdown && 'bg-[#EBEBEB]'
                  }`}
                >
                  {link?.dropdown?.map((item) => (
                    <div key={item} className="py-1">
                      <Link
                        href={`/${item}`}
                        className="cursor-pointer font-montserrat text-sm uppercase duration-200 hover:text-red-base"
                      >
                        {item}
                      </Link>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavLg = ({ isScrolled, hide }) => {
  const pathname = usePathname();
  return (
    <nav
      className={`fixed z-50 w-full ${
        isScrolled || greNavRoutes.includes(pathname)
          ? 'bg-[#EBEBEB]'
          : pathname === '/'
          ? 'text-black'
          : 'text-white'
      } ${hide ? '-translate-y-[100%]' : 'translate-y-0'} duration-300`}
    >
      <div
        className={`mx-10 flex items-center justify-between 2xl:mx-40 ${
          isScrolled
            ? ''
            : pathname === '/'
            ? 'border-b-2 border-black'
            : 'border-b-2 border-white'
        }`}
      >
        <div className="flex items-end">
          <Image
            src={Logo}
            width={500}
            height={400}
            alt="logo"
            className="h-16 w-28 object-contain"
          />
        </div>
        <div>
          <ul className="flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <li
                key={link.text}
                className={`group relative p-2 duration-200  ${
                  link?.dropdown && 'hover:bg-[#EBEBEB] hover:text-red-base'
                } `}
              >
                <Link
                  href={`${link.path || '#'}`}
                  className="font-montserrat text-xl uppercase hover:text-red-base"
                >
                  {link.text}
                </Link>
                <div
                  className={`pointer-events-none absolute left-0 top-[100%] w-full flex-col gap-3 p-2 pt-3 text-center text-black opacity-0 duration-200 group-hover:pointer-events-auto group-hover:opacity-100 ${
                    link?.dropdown && 'bg-[#EBEBEB]'
                  }`}
                >
                  {link?.dropdown?.map((item, id) => (
                    <div key={item} className="py-1">
                      <Link
                        href={`/${link.links[id]}`}
                        className="cursor-pointer font-montserrat text-lg uppercase duration-200 hover:text-red-base"
                      >
                        {item}
                      </Link>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hide, setHide] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  useMotionValueEvent(scrollY, 'change', (currScroll) => {
    if (currScroll <= 0) {
      setHide(false);
      setIsScrolled(false);
      return;
    }
    if (currScroll > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    if (prevScroll > currScroll) {
      setHide(false);
    } else {
      setHide(true);
    }
    setPrevScroll(currScroll);
  });
  return (
    <div>
      <div className="md:hidden">
        <NavSm isScrolled={isScrolled} hide={hide} />
      </div>
      <div className="hidden md:block lg:hidden">
        <NavMd isScrolled={isScrolled} hide={hide} />
      </div>
      <div className="hidden lg:block">
        <NavLg isScrolled={isScrolled} hide={hide} />
      </div>
    </div>
  );
};

export default Navbar;
