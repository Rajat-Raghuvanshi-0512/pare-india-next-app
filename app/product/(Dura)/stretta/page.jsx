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
  StrettaImg1,
  StrettaImg2,
  StrettaImg3,
  StrettaImg4,
  StrettaShade1Img1,
  StrettaShade1Img2,
  StrettaShade1Img3,
  StrettaShade1Img4,
  StrettaShade1Shade1,
  StrettaShade1Shade2,
  StrettaShade1Shade3,
  StrettaShade1Shade4,
  LouverSideImg,
  NormaLastSection,
  JTrim,
  TTrim,
  InsideTrim,
  OutsideTrim,
  StarterTrim,
  FinishedTrim,
} from '@/utils/assets';
import StrettaBanner from '@/components/products/stretta/StrettaBanner';

const metallicData = [
  {
    img: StrettaShade1Img1,
    shade: StrettaShade1Shade1,
    fname: 'ARTISAN',
    lname: 'OAK',
  },
  {
    img: StrettaShade1Img2,
    shade: StrettaShade1Shade2,
    fname: 'IMPERIAL',
    lname: 'NUT',
  },
  { img: StrettaShade1Img3, shade: StrettaShade1Shade3, fname: 'LARCH' },
  {
    img: StrettaShade1Img4,
    shade: StrettaShade1Shade4,
    fname: 'DARK',
    lname: 'TEAK',
  },
];
const otherProducts = [
  {
    image: NormaLastSection,
    smallImg: LouverSideImg,
    heading: 'DURA+ Norma',
    desc: 'Discover the epitome of durability and aesthetics with Norma panels, meticulously crafted to elevate your exterior facades. Embrace a long-lasting, decorative solution that stands the test of time.',
    redirect: '/norma',
  },
];

const Jimages = [
  JTrim,
  TTrim,
  InsideTrim,
  OutsideTrim,
  StarterTrim,
  FinishedTrim,
];
const trim = [
  { fname: 'J TRIM' },
  { fname: 'T TRIM' },
  { fname: 'INSIDE', lname: 'CORNER' },
  { fname: 'OUTSIDE', lname: 'CORNER' },
  { fname: 'STARTER', lname: 'TRIM' },
  { fname: 'FINISH', lname: 'TRIM' },
];
const Stretta = () => {
  return (
    <Suspense fallback={<Loader />}>
      <StrettaBanner />
      <ImgGallery
        img1={StrettaImg1}
        img2={StrettaImg2}
        img3={StrettaImg3}
        img4={StrettaImg4}
      />
      <Info code="106" size="265mm X 3660mm" shades={4} collections={1} />
      <Shades firstTitle="REALWOOD" firstData={metallicData} />
      <Trims Jimages={Jimages} trim={trim} />
      <Brochure />
      <MoreProducts data={otherProducts} type="Dura+" />
    </Suspense>
  );
};

export default Stretta;
