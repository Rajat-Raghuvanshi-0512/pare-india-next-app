import {
  Brochure,
  ImgGallery,
  Info,
  Shades,
  Trims,
} from '@/components/products';
import {
  WaveImg1,
  WaveImg2,
  WaveImg3,
  WaveImg4,
  WaveShade1Img1,
  WaveShade1Img2,
  WaveShade1Img3,
  WaveShade1Img4,
  WaveShade1Img5,
  WaveShade1Img6,
  WaveShade1Shade1,
  WaveShade1Shade2,
  WaveShade1Shade3,
  WaveShade1Shade4,
  WaveShade1Shade5,
  WaveShade1Shade6,
  WaveShade2Img1,
  WaveShade2Shade1,
  WaveShade2Shade2,
  WaveShade2Shade3,
  WaveShade2Shade4,
  WaveShade2Shade5,
  WaveShade2Shade6,
  WaveShade2Img2,
  WaveShade2Img3,
  WaveShade2Img4,
  WaveShade2Img5,
  WaveShade2Img6,
  LTrim,
  JtrimLarge,
  JtrimPro,
} from '@/utils/assets';
import WaveBanner from '@/components/products/wave/WaveBanner';

const metallicData = [
  { img: WaveShade1Img1, shade: WaveShade1Shade1, fname: 'GOLDen oak' },
  { img: WaveShade1Img3, shade: WaveShade1Shade3, fname: 'birch' },
  { img: WaveShade1Img2, shade: WaveShade1Shade2, fname: 'maple wood' },
  { img: WaveShade1Img4, shade: WaveShade1Shade4, fname: 'walnut' },
  { img: WaveShade1Img5, shade: WaveShade1Shade5, fname: 'pinewood' },
  {
    img: WaveShade1Img6,
    shade: WaveShade1Shade6,
    fname: 'weathred',
    lname: 'grey',
  },
];

const shade2Data = [
  { img: WaveShade2Img1, shade: WaveShade2Shade1, fname: 'spiced walnut' },
  { img: WaveShade2Img2, shade: WaveShade2Shade2, fname: 'oakwood ocre' },
  { img: WaveShade2Img3, shade: WaveShade2Shade3, fname: 'chestnut' },
  { img: WaveShade2Img4, shade: WaveShade2Shade4, fname: 'mahogany' },
  { img: WaveShade2Img5, shade: WaveShade2Shade5, fname: 'royalnut' },
  { img: WaveShade2Img6, shade: WaveShade2Shade6, fname: 'ashwood grey' },
];

const Jimages = [LTrim, JtrimLarge, JtrimPro];
const trim = [
  { fname: 'L TRIM' },
  { fname: 'J TRIM', lname: 'LARGE' },
  { fname: 'J TRIM', lname: 'PRO' },
];
const Wave = () => {
  return (
    <>
      <WaveBanner />
      <ImgGallery
        img1={WaveImg1}
        img2={WaveImg2}
        img3={WaveImg3}
        img4={WaveImg4}
      />
      <Info code="113" size="270mm X 3060mm" shades={12} collections={2} />
      <Shades
        firstTitle="WOODEN"
        firstData={metallicData}
        secondTitle="FOREST"
        secondData={shade2Data}
      />
      <Trims Jimages={Jimages} trim={trim} />
      <Brochure />
      <div className="bg-red-base py-5 font-montserrat text-white md:py-10">
        <h2 className="p-5 text-3xl font-bold md:px-10 md:text-4xl lg:px-16 lg:text-5xl">
          Expanding Possibilities with Innov2+
        </h2>
        <p className="p-3 md:mr-20 md:px-10 lg:px-16 lg:text-2xl">
          Alongside our versatile product range, we have more additional
          innovative solutions in the works. Stay tuned for the upcoming launch
          of Innov2+ products and explore even more possibilities to enhance
          your spaces.
        </p>
      </div>
    </>
  );
};

export default Wave;
