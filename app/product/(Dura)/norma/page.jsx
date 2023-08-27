import {
  Brochure,
  ImgGallery,
  Info,
  MoreProducts,
  Shades,
  Trims,
} from '@/components/products';
import {
  NormaImg1,
  NormaImg2,
  NormaImg3,
  NormaImg4,
  NormaShade1Img1,
  NormaShade1Img2,
  NormaShade1Img3,
  NormaShade1Shade1,
  NormaShade1Shade2,
  NormaShade1Shade3,
  NormaShade1Shade4,
  NormaShade1Img4,
  StrettaLastSection,
  StrettaSideImage,
  JTrim,
  TTrim,
  InsideTrim,
  OutsideTrim,
  StarterTrim,
  FinishedTrim,
} from '@/utils/assets';
import NormaBanner from '@/components/products/norma/NormaBanner';

const metallicData = [
  {
    img: NormaShade1Img1,
    shade: NormaShade1Shade1,
    fname: 'ARTISAN',
    lname: 'OAK',
  },
  {
    img: NormaShade1Img2,
    shade: NormaShade1Shade2,
    fname: 'IMPERIAL',
    lname: 'NUT',
  },
  { img: NormaShade1Img3, shade: NormaShade1Shade3, fname: 'LARCH' },
  {
    img: NormaShade1Img4,
    shade: NormaShade1Shade4,
    fname: 'DARK',
    lname: 'TEAK',
  },
];

const otherProducts = [
  {
    image: StrettaLastSection,
    smallImg: StrettaSideImage,
    heading: 'DURA+ Stretta',
    desc: 'Experience a flawless and refined exterior wall cladding with Stretta Apanels, designed to perfection. Enjoy a smooth and resilient surface that stands strong against scratches and impacts, ensuring lasting beauty for your space.',
    redirect: '/stretta',
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
const Norma = () => {
  return (
    <>
      <NormaBanner />
      <ImgGallery
        img1={NormaImg1}
        img2={NormaImg2}
        img3={NormaImg3}
        img4={NormaImg4}
      />
      <Info code="105" size="340mm X 3660mm" shades={4} collections={1} />
      <Shades firstTitle="REALWOOD" firstData={metallicData} />
      <Trims Jimages={Jimages} trim={trim} />
      <Brochure />
      <MoreProducts data={otherProducts} type="Dura+" />
    </>
  );
};

export default Norma;
