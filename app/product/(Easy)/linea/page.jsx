import { Suspense } from 'react';
import { Loader } from '@/components';
import {
  Brochure,
  ImgGallery,
  Info,
  LineaBanner,
  MoreProducts,
  Shades,
  Trims,
} from '@/components/products';
import {
  LineaImg1,
  LineaImg2,
  LineaImg3,
  LineaImg4,
  LineaNatureImg4,
  LineaNatureImg5,
  LineaNatureImg6,
  LineaNatureShade4,
  LineaNatureShade5,
  LineaNatureShade6,
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
  LouverSideImg,
  SoffitSideImg,
  PyramidLastSection,
  ArchLastSection,
  SilverLinea,
  SilverLineaShade,
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

const fourthData = [
  { img: SilverLinea, shade: SilverLineaShade, fname: 'PEARL' },
];

const otherProducts = [
  {
    image: PyramidLastSection,
    smallImg: LouverSideImg,
    heading: 'EASY+ Pyramid',
    desc: 'Unleash the power of sharp angles and captivating lines with EASY+ Pyramid. Elevate your space with architectural depth and a visually stunning design that adds a touch of modern sophistication.',
    redirect: '/pyramid',
  },
  {
    image: ArchLastSection,
    smallImg: SoffitSideImg,
    heading: 'EASY+ Arch',
    desc: 'Experience the beauty of graceful curves and flowing lines with EASY+ Arch. Elevate your space with the timeless allure of arched designs that creates a sense of elegance and architectural intrigue.',
    redirect: '/arch',
  },
];
const Jimages = [LTrim, JtrimLarge, JtrimPro];
const trim = [
  { fname: 'L TRIM' },
  { fname: 'J TRIM', lname: 'LARGE' },
  { fname: 'J TRIM', lname: 'PRO' },
];
const Linea = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LineaBanner />
      <ImgGallery
        img1={LineaImg1}
        img2={LineaImg2}
        img3={LineaImg3}
        img4={LineaImg4}
      />
      <Info code="107" size="150mm X 3060mm" shades={13} collections={4} />
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

export default Linea;
