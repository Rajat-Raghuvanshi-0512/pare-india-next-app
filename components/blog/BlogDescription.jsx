'use client';
import { FacebookIcon, PinterestIcon, TwitterIcon } from '@/utils/assets';
import { blogsCount } from '../../utils/constants';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

const SubscribeForm = () => {
  return (
    <div className="border border-[#1C1C1C] p-5 font-inter md:p-10">
      <h4 className="text-xl font-bold md:text-3xl">Pare India Blog</h4>
      <p className="py-4 text-xs text-[#5D5D5C] md:text-sm">
        Sign up for our newsletter to get the top stories delivered straight to
        your inbox.
      </p>
      <div className="flex gap-3">
        <input
          type="text"
          className="w-full bg-[#D9D9D9] p-3 text-xs outline-none md:p-4 md:text-sm lg:text-base"
          placeholder="Enter your email"
        />
        <button className="bg-red-base px-4 py-2 text-xs uppercase text-white md:px-8 md:py-4">
          subscribe
        </button>
      </div>
      <div className="flex items-start gap-3 py-5 md:items-center">
        <input type="checkbox" className="bg-[#D9D9D9] outline-none" />
        <div className="text-xs md:text-sm lg:text-base">
          I agree to the{' '}
          <span className="font-medium text-red-base">
            Online Privacy Policy
          </span>{' '}
          and{' '}
          <span className="font-medium text-red-base">
            Terms and Conditions.
          </span>
        </div>
      </div>
    </div>
  );
};

const BigDescription = () => {
  return (
    <div className="mt-5">
      <h3 className="py-5 text-4xl font-bold !leading-snug text-[#1C1C1C] lg:text-[2.5rem]">
        From Floors to Walls: Unleash the Transformative Power of Tiles
      </h3>
      <p className="text-[#5D5D5C]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        ligula non ullamcorper condimentum, lectus ex viverra dolor, eget
        accumsan mauris sapien sed sem. Vestibulum ultricies auctor quam, id
        feugiat nibh dapibus at. Sed sodales tortor vitae consectetur ultrices.
        Maecenas ac lorem eget enim venenatis vestibulum. Donec tincidunt
        finibus sapien. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas. Cras maximus eleifend mi id
        pharetra. Maecenas in dictum eros, sit amet condimentum nibh. Sed
        consectetur neque eu diam viverra, at cursus urna suscipit. Donec
        scelerisque purus at ante viverra ullamcorper. Nullam ultrices lorem ut
        tortor laoreet lobortis. Vestibulum quis interdum felis. In hac
        habitasse platea dictumst.
      </p>
    </div>
  );
};

const SmallDescription = () => {
  return (
    <div className="mt-5">
      <h3 className="py-5 text-2xl font-semibold !leading-snug text-[#1C1C1C] lg:text-3xl">
        Lorem ipsum
      </h3>
      <p className="text-[#5D5D5C]">
        orem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        ligula non ullamcorper condimentum, lectus ex viverra dolor, eget
        accumsan mauris sapien sed sem. Vestibulum ultricies auctor quam, id
        feugiat nibh dapibus at.
      </p>
    </div>
  );
};

const BlogDescription = () => {
  const router = useRouter();
  const { id } = useParams();
  const handlePrev = () => {
    if (id <= 1) return;
    router.push(`/blog/${Number(id) - 1}`);
  };
  const handleNext = () => {
    if (id == blogsCount) return;
    router.push(`/blog/${Number(id) + 1}`);
  };
  return (
    <section className="p-5 md:px-20 lg:px-60 lg:pb-20">
      <h2 className="text-3xl font-bold !leading-snug text-[#1C1C1C] lg:text-4xl lg:text-[2.5rem]">
        Unleashing Tile Creativity: Elevate Your Home Design with Endless
        Possibilities
      </h2>
      <p className="py-2 font-inter text-[#5D5D5C]">
        Tiles offer a plethora of possibilities when it comes to enhancing your
        interior design. Here are some creative ways you can incorporate tiles
        into your design scheme to elevate the overall aesthetic of your home.
        One approach is to create accent walls using eye-catching tiles. By
        selecting tiles with vibrant colors, intricate patterns, or unique
        textures, you can instantly establish a focal point that adds depth and
        visual interest to any room.
      </p>
      <p className="py-2 pb-5 font-inter text-[#5D5D5C]">
        Consider using tiles as a backsplash in your kitchen or bathroom. Apart
        from providing protection against splashes and spills, a well-chosen
        backsplash can infuse personality and charm into the space. Explore
        options like subway tiles for a classic look or mosaic patterns for a
        more intricate design. Tiles also make excellent choices for flooring,
        offering durability and versatility. With a wide range of styles
        available, from sleek and modern to rustic and traditional, you can
        experiment with different colors, shapes, and sizes to create unique
        patterns or opt for large-format tiles for a seamless, contemporary
        look.
      </p>
      <SubscribeForm />
      <div className="flex flex-col gap-5 py-10 font-medium">
        <div className="flex items-center gap-5 text-red-base">
          <div className="h-8 w-8 rounded-full bg-red-base"></div>
          <div>How much life insurance should I get?</div>
        </div>
        <div className="flex items-center gap-5 text-red-base">
          <div className="h-8 w-8 rounded-full bg-red-base"></div>
          <div>Wysh Builder vs term life insurance calculator</div>
        </div>
        <div className="flex items-center gap-5 text-red-base">
          <div className="h-8 w-8 rounded-full bg-red-base"></div>
          <div>Power of personalization</div>
        </div>
      </div>
      {/* <div>
        <BigDescription />
        <BigDescription />
        <SmallDescription />
        <SmallDescription />
        <SmallDescription />
        <SmallDescription />
        <SmallDescription />
      </div> */}
      <hr className="mt-10" />
      <div className="share flex items-center gap-5 py-5">
        <div className="font-inter font-bold uppercase">Share</div>
        <Image
          src={FacebookIcon}
          alt="fb"
          width={40}
          className="object-cover"
        />
        <Image
          src={TwitterIcon}
          alt="twitter"
          width={40}
          className="object-cover"
        />
        <Image
          src={PinterestIcon}
          alt="pinterest"
          width={40}
          className="object-cover"
        />
      </div>
      <div className="flex justify-between gap-5 pt-10 md:gap-20 lg:gap-40">
        <div className="flex-1">
          <div
            className="relative font-bold uppercase after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-4 after:bg-black after:content-[''] md:after:h-[3px] md:after:w-5"
            onClick={handlePrev}
          >
            Prev
          </div>
          <p className="pt-5">
            Life insurance beneficiary rules—and other burning FAQs
          </p>
        </div>
        <div className="flex-1 text-right">
          <div
            className="relative font-bold uppercase after:absolute after:-bottom-2 after:right-0 after:h-1 after:w-4 after:bg-black after:content-[''] md:after:h-[3px] md:after:w-5"
            onClick={handleNext}
          >
            Next
          </div>
          <p className="pt-5">How much life insurance do I need?</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDescription;
