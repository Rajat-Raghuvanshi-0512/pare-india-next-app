'use client';
import ShadeBox from '../ShadeBox';
import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
const Shades = ({
  firstTitle,
  secondTitle,
  thirdTitle,
  firstData,
  secondData,
  thirdData,
  fourthData,
  fourthTitle,
}) => {
  const ref = useRef();
  const { events } = useDraggable(ref);
  return (
    <section className="bg-black-base pt-10 font-montserrat">
      <h2 className="mx-auto w-fit border-b-2 border-red-base py-2 text-center text-3xl font-bold text-white lg:text-4xl">
        AVAILABLE SHADES
      </h2>
      <div className="relative md:mt-10 lg:mt-20">
        {firstData && (
          <div className="relative flex w-full select-none items-center md:pl-10">
            <h5 className="absolute w-fit -rotate-90 text-xl font-medium text-red-base">
              {firstTitle} <br /> COLLECTION
            </h5>
            <div className="ml-28 flex gap-10 md:ml-40 md:gap-10 lg:min-w-[80vw] overflow-scroll lg:gap-20">
              {firstData.map((item, idx) => (
                <ShadeBox item={item} idx={idx} key={item.img + idx} />
              ))}
            </div>
          </div>
        )}
        <div
          className="relative flex items-center bg-red-base md:pl-10"
          {...events}
          ref={ref}
        >
          {secondData && (
            <>
              <h5 className="absolute w-fit -rotate-90 select-none text-xl font-medium text-white">
                {secondTitle} <br /> COLLECTION
              </h5>
              <div className="ml-28 flex  gap-10 md:ml-40 md:gap-10 lg:min-w-[80vw] overflow-scroll lg:gap-20">
                {secondData.map((item, idx) => (
                  <ShadeBox item={item} idx={idx} key={item.img + idx} />
                ))}
              </div>
            </>
          )}
        </div>
        {thirdData && (
          <div className="relative flex select-none items-center md:pl-10">
            <h5 className="absolute w-fit -rotate-90 text-xl font-medium text-red-base">
              {thirdTitle} <br /> COLLECTION
            </h5>
            <div className="ml-28 flex gap-10 md:ml-40 md:gap-10 lg:min-w-[80vw] overflow-scroll lg:gap-20">
              {thirdData.map((item, idx) => (
                <ShadeBox item={item} idx={idx} key={item.img + idx} />
              ))}
            </div>
          </div>
        )}
        <div className="relative flex items-center bg-red-base md:pl-10">
          {fourthData && (
            <>
              <h5 className="absolute w-fit -rotate-90 text-xl font-medium text-white">
                {fourthTitle} <br /> COLLECTION
              </h5>
              <div className="ml-28 flex  w-full gap-10 overflow-y-hidden overflow-x-scroll md:ml-40 md:gap-10 lg:min-w-[80vw] lg:gap-20">
                {fourthData.map((item, idx) => (
                  <ShadeBox item={item} idx={idx} key={item.img + idx} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Shades;
