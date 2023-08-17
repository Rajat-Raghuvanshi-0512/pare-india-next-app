import { Blog1Avatar, Blog1BannerImg, Blog1PhoneBannerImg } from '@/utils/assets'
import Image from 'next/image'

const BlogInfoBanner = () => {
  return (
    <section className="md:p-10 lg:p-20 lg:pb-0 lg:pt-24">
      <div className="md:ml-20 lg:ml-40">
        <Image src={Blog1BannerImg} alt="banner" className="hidden w-full md:block" />
        <div className="bg-red-base px-5 pb-5 pt-20 text-white md:w-[95%] md:-translate-x-[5%] md:-translate-y-[20%] md:p-10">
          <div className="font-montserrat font-semibold uppercase">May 2023</div>
          <div className="border-b border-b-[#B0B0A8] py-5 font-metropolis text-5xl font-bold !leading-snug lg:text-4xl">
            5 Creative Ways to Incorporate Tiles into Your Interior Design
          </div>
          <div className="mt-3 flex items-center gap-5">
            <Image src={Blog1Avatar} alt="avatar" width={60} />
            <div className="font-inter">
              <h6 className="font-semibold">John</h6>
              <p className="text-sm">Personal Finance Writer</p>
            </div>
          </div>
        </div>
      </div>
      <Image src={Blog1PhoneBannerImg} alt="banner" className="w-full md:hidden" />
    </section>
  )
}

export default BlogInfoBanner
