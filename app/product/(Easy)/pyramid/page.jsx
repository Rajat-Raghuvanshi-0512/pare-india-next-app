import { Suspense } from 'react';
import { Loader } from '@/components';
import {
  Brochure,
  ImgGallery,
  Info,
  MoreProducts,
  PyramidBanner,
  Shades,
  Trims,
} from '@/components/products';
import {
  LineaMarbleImg1,
  LineaMarbleImg2,
  LineaMarbleImg3,
  LineaMarbleShade1,
  LineaMarbleShade2,
  LineaMarbleShade3,
  LineaMetallicImg1,
  LineaMetallicImg2,
  LineaMetallicImg3,
  LineaMetallicShade1,
  LineaMetallicShade2,
  LineaMetallicShade3,
  LineaNatureImg1,
  LineaNatureImg2,
  LineaNatureImg3,
  LineaNatureShade1,
  LineaNatureShade2,
  LineaNatureShade3,
  LineaNatureImg4,
  LineaNatureImg5,
  PyramidImg1,
  PyramidImg2,
  PyramidImg3,
  PyramidImg4,
  LineaNatureShade4,
  LineaNatureShade5,
  LineaNatureShade6,
  LineaNatureImg6,
  LouverSideImg,
  SoffitSideImg,
  LineaLastSection,
  ArchLastSection,
  SilverPyramid,
  SilverPyramidShade,
  LTrim,
  JtrimLarge,
  JtrimPro,
} from '@/utils/assets';

const metallicData = [
  { img: LineaMetallicImg1, shade: LineaMetallicShade1, fname: 'GOLD' },
  { img: LineaMetallicImg2, shade: LineaMetallicShade2, fname: 'SILVER' },
  { img: LineaMetallicImg3, shade: LineaMetallicShade3, fname: 'COPPER' },
];

const marbleData = [
  {
    img: LineaMarbleImg1,
    shade: LineaMarbleShade1,
    fname: 'armani',
    lname: 'grey',
  },
  { img: LineaMarbleImg2, shade: LineaMarbleShade2, fname: 'STATUARIO' },
  { img: LineaMarbleImg3, shade: LineaMarbleShade3, fname: 'PORTORO' },
];

const natureData = [
  {
    img: LineaNatureImg1,
    shade: LineaNatureShade1,
    fname: 'OAK WOOD',
    lname: 'OCRE',
  },
  {
    img: LineaNatureImg2,
    shade: LineaNatureShade2,
    fname: 'SPICED',
    lname: 'WALNUT',
  },
  { img: LineaNatureImg3, shade: LineaNatureShade3, fname: 'MAHOGANY' },
  {
    img: LineaNatureImg4,
    shade: LineaNatureShade4,
    fname: 'royal',
    lname: 'nut',
  },
  {
    img: LineaNatureImg5,
    shade: LineaNatureShade5,
    fname: 'ash wood',
    lname: 'grey',
  },
  {
    img: LineaNatureImg6,
    shade: LineaNatureShade6,
    fname: 'beech',
    lname: 'wood',
  },
];
const otherProducts = [
  {
    image: LineaLastSection,
    smallImg: LouverSideImg,
    heading: 'EASY+ Linea',
    desc: "Revitalize your space effortlessly with Easy+, the ultimate easy-to-install system, for remarkable transformations. Say goodbye to complicated installations and hello to stunning results with Easy+'s simplicity and convenience.",
    redirect: '/linea',
  },
  {
    image: ArchLastSection,
    smallImg: SoffitSideImg,
    heading: 'EASY+ Arch',
    desc: 'Experience the beauty of graceful curves and flowing lines with EASY+ Arch. Elevate your space with the timeless allure of arched designs that creates a sense of elegance and architectural intrigue.',
    redirect: '/arch',
  },
];

const fourthData = [
  { img: SilverPyramid, shade: SilverPyramidShade, fname: 'PEARL' },
];
const Jimages = [LTrim, JtrimLarge, JtrimPro];
const trim = [
  { fname: 'L TRIM' },
  { fname: 'J TRIM', lname: 'LARGE' },
  { fname: 'J TRIM', lname: 'PRO' },
];
const Pyramid = () => {
  return (
    <Suspense fallback={<Loader />}>
      <PyramidBanner />
      <ImgGallery
        img1={PyramidImg1}
        img2={PyramidImg2}
        img3={PyramidImg3}
        img4={PyramidImg4}
      />
      <Info code="108" size="140mm X 3060mm" shades={13} collections={4} />
      <Shades
        firstTitle="NATURE"
        firstData={natureData}
        secondTitle="METALLIC"
        secondData={metallicData}
        thirdTitle="MARBLE"
        thirdData={marbleData}
        fourthTitle={'FABRIC'}
        fourthData={fourthData}
      />
      <Trims Jimages={Jimages} trim={trim} />
      <Brochure />
      <MoreProducts data={otherProducts} />
    </Suspense>
  );
};

export default Pyramid;
