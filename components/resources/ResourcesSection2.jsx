'use client';
import {
  ResourceImg1,
  ResourceImg2,
  ResourceImg3,
  ResourceImg4,
  ResourceImg5,
  ResourcePhoneImg1,
  ResourcePhoneImg2,
  ResourcePhoneImg3,
  ResourcePhoneImg4,
  ResourcePhoneImg5,
} from '@/utils/assets';
import DownloadSlider from './DownloadSlider';
import Image from 'next/image';

const phoneImages = [
  {
    image: ResourcePhoneImg1,
    text: 'Soffit: Wooden Collection',
    link: 'wooden.pdf',
  },
  {
    image: ResourcePhoneImg2,
    text: 'Soffit: Forest Collection',
    link: 'forest.pdf',
  },
  {
    image: ResourcePhoneImg3,
    text: 'Soffit: Real Wood Collection',
    link: 'realwood.pdf',
  },
  { image: ResourcePhoneImg4, text: 'Louvers', link: 'louvers.pdf' },
  { image: ResourcePhoneImg5, text: 'Dura+', link: 'dura.pdf' },
];

const images = [
  {
    image: ResourceImg1,
    text: 'Soffit: Wooden Collection',
    link: 'wooden.pdf',
  },
  {
    image: ResourceImg2,
    text: 'Soffit: Forest Collection',
    link: 'forest.pdf',
  },
  {
    image: ResourceImg3,
    text: 'Soffit: Real Wood Collection',
    link: 'realwood.pdf',
  },
  { image: ResourceImg4, text: 'Louvers', link: 'louvers.pdf' },
  { image: ResourceImg5, text: 'Dura+', link: 'dura.pdf' },
];

const ResourcesSm = () => {
  return (
    <section className="p-5 pt-0">
      <h4 className="pb-2 text-center font-montserrat font-medium text-red-base">
        Tap to download
      </h4>
      <div className="grid grid-cols-2 gap-5">
        {phoneImages.map((imgObj, idx) => (
          <div
            key={imgObj.text}
            className={`relative flex h-[120px] items-center justify-center overflow-hidden rounded-lg ${
              idx == 4 ? 'col-span-2 w-full' : ''
            }`}
            onClick={() => {
              'use client';
              window.open(imgObj.link);
            }}
          >
            <div className="absolute left-0 right-0 -z-10 h-full w-full bg-black/25"></div>
            <Image
              src={imgObj.image}
              alt="resources"
              className="absolute left-0 top-0 -z-20 h-full w-full"
            />
            <p className="font-metropolis text-xs font-bold text-white">
              {imgObj.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
const ResourcesLg = () => {
  return (
    <section>
      {images.map((imageObj) => (
        <DownloadSlider key={imageObj.text} {...imageObj} />
      ))}
    </section>
  );
};

const ResourcesSection2 = () => {
  return (
    <>
      <div className="md:hidden">
        <ResourcesSm />
      </div>
      <div className="hidden md:block">
        <ResourcesLg />
      </div>
    </>
  );
};

export default ResourcesSection2;
