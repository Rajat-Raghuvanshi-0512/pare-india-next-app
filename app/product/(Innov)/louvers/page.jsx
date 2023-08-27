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
  LouverImg1,
  LouverImg2,
  LouverImg3,
  LouverImg4,
  louverShade1Img1,
  louverShade1Shade2,
  louverShade1Shade1,
  louverShade1Img2,
  louverShade1Img3,
  louverShade1Shade3,
  louverShade2Img1,
  louverShade2Shade1,
  louverShade2Img2,
  louverShade2Shade2,
  louverShade2Shade3,
  louverShade2Img3,
  louverShade3Img1,
  louverShade3Shade1,
  louverShade3Shade2,
  louverShade3Img2,
  louverShade3Img3,
  louverShade3Shade3,
  louverShade3Shade4,
  louverShade3Img4,
  louverShade3Img5,
  louverShade3Shade5,
  louverShade3Shade6,
  louverShade3Img6,
  LouverSideImg,
  VerticaSideImg,
  SoffitLastSection,
  LouverLastSection,
  VerticaLastSection,
  LouversImg1,
  LouversShadeImg1,
  LTrim,
  JtrimLarge,
  JtrimPro,
  JLarge,
  TTrim,
  InsideTrim,
  OutsideTrim,
} from '@/utils/assets';
import LouversBanner from '@/components/products/louvers/LouversBanner';

const metallicData = [
  { img: louverShade1Img1, shade: louverShade1Shade1, fname: 'GOLD' },
  { img: louverShade1Img2, shade: louverShade1Shade2, fname: 'SILVER' },
  { img: louverShade1Img3, shade: louverShade1Shade3, fname: 'Copper' },
];

const marbleData = [
  { img: louverShade2Img1, shade: louverShade2Shade1, fname: 'armani grey' },
  { img: louverShade2Img2, shade: louverShade2Shade2, fname: 'STATUARIO' },
  { img: louverShade2Img3, shade: louverShade2Shade3, fname: 'PORTORO' },
];

const natureData = [
  { img: louverShade3Img1, shade: louverShade3Shade1, fname: 'oakwood ocre' },
  { img: louverShade3Img2, shade: louverShade3Shade2, fname: 'spiced walnut' },
  { img: louverShade3Img3, shade: louverShade3Shade3, fname: 'mahogany' },
  { img: louverShade3Img4, shade: louverShade3Shade4, fname: 'Royal nut' },
  { img: louverShade3Img5, shade: louverShade3Shade5, fname: 'ashwood grey' },
  { img: louverShade3Img6, shade: louverShade3Shade6, fname: 'beech wood' },
];

const fourthData = [
  { img: LouversImg1, shade: LouversShadeImg1, fname: 'PEARL' },
];

const otherProducts = [
  {
    image: SoffitLastSection,
    smallImg: LouverSideImg,
    heading: 'INNOV+ Soffit',
    desc: 'Discover Soffit, the perfect blend of aesthetic appeal and convenience, providing the charm of real wood without the drawbacks. Effortlessly transform your space with quick and easy installation, achieving a seamless finish that leaves a lasting impression.',
    redirect: '/soffit',
  },
  {
    image: LouverLastSection,
    smallImg: LouverSideImg,
    heading: 'INNOV+ Duo',
    desc: 'Experience the unmatched durability and waterproof capabilities of Louvers, making them perfect for diverse applications. With a seamless interlocking system, they effortlessly integrate with other PARÉ products, ensuring a flawless finish for your projects.',
    redirect: '/duo',
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
const Louvers = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LouversBanner />
      <ImgGallery
        img1={LouverImg1}
        img2={LouverImg2}
        img3={LouverImg3}
        img4={LouverImg4}
      />
      <Info code="103" size="265mm X 3060mm" shades={13} collections={4} />
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
      <MoreProducts data={otherProducts} type="Innov+" />
    </Suspense>
  );
};

export default Louvers;
