import Link from 'next/link'
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai'
import { Logo } from '@/components/logo'
import { ForwardedRef, forwardRef } from 'react'

const social = [
  {
    link: 'https://www.instagram.com/',
    icon: AiFillInstagram,
  },
  {
    link: 'https://ru-ru.facebook.com/',
    icon: AiFillFacebook,
  },
  {
    link: 'https://twitter.com/home',
    icon: AiFillTwitterCircle,
  },
]

export const Footer = forwardRef((props, ref): JSX.Element => {
  return (
    <footer className="bg-white shadow-sm py-10" ref={ref as ForwardedRef<HTMLElement>}>
      <div className="responsive py-4 flex justify-between items-center">
        <div>
          <Logo />
          <h1 className="text-2xl pt-5"><span className="font-bold">Fast</span> and <span className="font-bold">affordable</span><br />cargo transportation<br />with us.</h1>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-1xl font-black justify-start">Pages</h3>
          <menu className="flex flex-col mt-5 text-start">
            <li className="hover:text-gray-500 ml-10">
              <Link href="/news">News</Link>
            </li>
            <li className="hover:text-gray-500 ml-10">
              <Link href="/about">About us</Link>
            </li>
            <li className="hover:text-gray-500 ml-10">
              <Link href="/login">Log in</Link>
            </li>
          </menu>
        </div>
        <div className="flex-col ">
          <h3 className="text-1xl font-black">Messengers</h3>
          <div className="flex justify-between w-1/2 gap-x-5 mt-5">
            {
              social.map(({ link, icon: Icon }) => (
                <Link
                  key={link}
                  href={link}
                >
                  <Icon className="w-[24px] h-[24px] hover:text-slate-500 transition-all" />
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  )
})