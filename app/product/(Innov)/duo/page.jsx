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
  DuoImg1,
  DuoImg2,
  DuoImg3,
  DuoImg4,
  DuoShade1Img1,
  DuoShade1Img2,
  DuoShade1Img3,
  DuoShade1Img4,
  DuoShade1Img5,
  DuoShade1Img6,
  DuoShade1Shade1,
  DuoShade1Shade2,
  DuoShade1Shade3,
  DuoShade1Shade4,
  DuoShade1Shade5,
  DuoShade1Shade6,
  DuoShade2Img1,
  DuoShade2Img2,
  DuoShade2Img3,
  DuoShade2Img4,
  DuoShade2Img5,
  DuoShade2Img6,
  DuoShade2Shade1,
  DuoShade2Shade2,
  DuoShade2Shade3,
  DuoShade2Shade4,
  DuoShade2Shade5,
  DuoShade2Shade6,
  VerticaSideImg,
  SoffitSideImg,
  LouverSideImg,
  SoffitLastSection,
  LouverLastSection,
  VerticaLastSection,
  JLarge,
  JtrimLarge,
  JtrimPro,
  LTrim,
  TTrim,
  InsideTrim,
  OutsideTrim,
} from '@/utils/assets';
import DuoBanner from '@/components/products/duo/DuoBanner';
const metallicData = [
  { img: DuoShade1Img1, shade: DuoShade1Shade1, fname: 'GOLDen oak' },
  { img: DuoShade1Img3, shade: DuoShade1Shade3, fname: 'birch' },
  { img: DuoShade1Img2, shade: DuoShade1Shade2, fname: 'maple wood' },
  { img: DuoShade1Img4, shade: DuoShade1Shade4, fname: 'walnut' },
  { img: DuoShade1Img5, shade: DuoShade1Shade5, fname: 'pinewood' },
  {
    img: DuoShade1Img6,
    shade: DuoShade1Shade6,
    fname: 'weathred',
    lname: 'grey',
  },
];

const shade2Data = [
  { img: DuoShade2Img1, shade: DuoShade2Shade1, fname: 'spiced walnut' },
  { img: DuoShade2Img2, shade: DuoShade2Shade2, fname: 'oakwood ocre' },
  { img: DuoShade2Img3, shade: DuoShade2Shade3, fname: 'chestnut' },
  { img: DuoShade2Img4, shade: DuoShade2Shade4, fname: 'mahogany' },
  { img: DuoShade2Img5, shade: DuoShade2Shade5, fname: 'royalnut' },
  { img: DuoShade2Img6, shade: DuoShade2Shade6, fname: 'ashwood grey' },
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
const Duo = () => {
  return (
    <Suspense fallback={<Loader />}>
      <DuoBanner />
      <ImgGallery img1={DuoImg1} img2={DuoImg2} img3={DuoImg3} img4={DuoImg4} />
      <Info code="104" size="340mm X 3060mm" shades={12} collections={2} />
      <Shades
        firstTitle="WOODEN"
        firstData={metallicData}
        secondTitle="FOREST"
        secondData={shade2Data}
      />
      <Trims Jimages={Jimages} trim={trim} />
      <Brochure />
      <MoreProducts data={otherProducts} type="Innov+" />
    </Suspense>
  );
};

export default Duo;
