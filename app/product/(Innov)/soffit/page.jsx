import { Suspense } from 'react';
import { Loader } from '@/components';
import {
  Brochure,
  ImgGallery,
  Info,
  MoreProducts,
  Shades,
  Trims,
} from '@/components/products';
import {
  SoffitImg1,
  SoffitImg2,
  SoffitImg3,
  SoffitImg4,
  SoffitShade1Shade6,
  SoffitShade1Shade5,
  SoffitShade1Img5,
  SoffitShade1Img6,
  SoffitShade1Img4,
  SoffitShade1Img3,
  SoffitShade1Img2,
  SoffitShade1Img1,
  SoffitShade1Shade1,
  SoffitShade1Shade2,
  SoffitShade1Shade3,
  SoffitShade1Shade4,
  SoffitShade2Shade6,
  SoffitShade2Shade5,
  SoffitShade2Img5,
  SoffitShade2Img6,
  SoffitShade2Img4,
  SoffitShade2Img3,
  SoffitShade2Img2,
  SoffitShade2Img1,
  SoffitShade2Shade1,
  SoffitShade2Shade2,
  SoffitShade2Shade3,
  SoffitShade2Shade4,
  SoffitShade3Img1,
  SoffitShade3Img2,
  SoffitShade3Shade5,
  SoffitShade3Shade6,
  SoffitSideImg,
  VerticaSideImg,
  LouverLastSection,
  VerticaLastSection,
  DuoLastSection,
  DuoSideImage,
  LTrim,
  JtrimLarge,
  JtrimPro,
  JLarge,
  TTrim,
  InsideTrim,
  OutsideTrim,
} from '@/utils/assets';
import SoffitBanner from '@/components/products/soffit/SoffitBanner';

const metallicData = [
  { img: SoffitShade1Img1, shade: SoffitShade1Shade1, fname: 'GOLDen oak' },
  { img: SoffitShade1Img3, shade: SoffitShade1Shade3, fname: 'birch' },
  { img: SoffitShade1Img2, shade: SoffitShade1Shade2, fname: 'maple wood' },
  { img: SoffitShade1Img4, shade: SoffitShade1Shade4, fname: 'walnut' },
  { img: SoffitShade1Img5, shade: SoffitShade1Shade5, fname: 'pinewood' },
  {
    img: SoffitShade1Img6,
    shade: SoffitShade1Shade6,
    fname: 'weathred',
    lname: 'grey',
  },
];

const shade2Data = [
  { img: SoffitShade2Img1, shade: SoffitShade2Shade1, fname: 'spiced walnut' },
  { img: SoffitShade2Img2, shade: SoffitShade2Shade2, fname: 'oakwood ocre' },
  { img: SoffitShade2Img3, shade: SoffitShade2Shade3, fname: 'chestnut' },
  { img: SoffitShade2Img4, shade: SoffitShade2Shade4, fname: 'mahogany' },
  { img: SoffitShade2Img5, shade: SoffitShade2Shade5, fname: 'royalnut' },
  { img: SoffitShade2Img6, shade: SoffitShade2Shade6, fname: 'ashwood grey' },
];

const shade3Data = [
  { img: SoffitShade3Img1, shade: SoffitShade3Shade5, fname: 'graphite' },
  { img: SoffitShade3Img2, shade: SoffitShade3Shade6, fname: 'super white' },
];

const otherProducts = [
  {
    image: DuoLastSection,
    smallImg: DuoSideImage,
    heading: 'INNOV+ Duo',
    desc: "India's revolutionary polymer-based wall and ceiling system - an installation and maintenance-free marvel that's waterproof and fire retardant. Elevate your space effortlessly with its versatile collections, offering a seamless, hassle-free solution like never before.",
    redirect: '/duo',
  },
  {
    image: LouverLastSection,
    smallImg: SoffitSideImg,
    heading: 'INNOV+ Louvers',
    desc: 'Experience the unmatched durability and waterproof capabilities of Louvers, making them perfect for diverse applications. With a seamless interlocking system, they effortlessly integrate with other PARÉ products, ensuring a flawless finish for your projects.',
    redirect: '/louvers',
  },
  {
    image: VerticaLastSection,
    smallImg: VerticaSideImg,
    heading: 'INNOV+ Vertica',
    desc: 'Transform your walls and ceilings with Vertica panels, the smart and hassle-free solution. Enjoy seamless installation, low maintenance, and reduced wastage, making your experience efficient and rewarding.',
    redirect: '/vertica',
  },
];

const Jimages = [
  LTrim,
  JtrimLarge,
  JtrimPro,
  JLarge,
  TTrim,
  InsideTrim,
  OutsideTrim,
];
const trim = [
  { fname: 'L TRIM' },
  { fname: 'J TRIM', lname: 'LARGE' },
  { fname: 'J TRIM', lname: 'PRO' },
  { fname: 'J TRIM' },
  { fname: 'T TRIM' },
  { fname: 'INSIDE', lname: 'CORNER' },
  { fname: 'OUTSIDE', lname: 'CORNER' },
];
const Soffit = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SoffitBanner />
      <ImgGallery
        img1={SoffitImg1}
        img2={SoffitImg2}
        img3={SoffitImg3}
        img4={SoffitImg4}
      />
      <Info code="101" size="340mm X 3060/4000mm" shades={14} collections={3} />
      <Shades
        firstTitle="WOODEN"
        firstData={metallicData}
        secondTitle="FOREST"
        secondData={shade2Data}
        thirdTitle={'UNI-COLOR'}
        thirdData={shade3Data}
      />
      <Trims Jimages={Jimages} trim={trim} />
      <Brochure />
      <MoreProducts data={otherProducts} type="Innov+" />
    </Suspense>
  );
};

export default Soffit;
