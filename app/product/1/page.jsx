import { P1Section1, P1Section2, Product1Banner } from '@/components/products';
import { productsData } from '@/utils/constants';

const ProductInfo = () => {
  return (
    <>
      <Product1Banner data={productsData['1']?.bannerSection} />
      <P1Section1 data={productsData['1']?.section1data} />
      <P1Section2 data={productsData['1']?.section2data} />
    </>
  );
};

export default ProductInfo;
