import { Line } from 'rc-progress';
import { useEffect } from 'react';
const MainLoader = ({ percent }) => {
  useEffect(() => {
    if (percent < 99) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [percent]);
  return (
    <div
      className={`fixed z-[1000] flex h-screen w-screen flex-col justify-between bg-white`}
    >
      <div className="p-5 pt-20 text-center font-montserrat text-5xl font-semibold uppercase text-red-base md:p-10 md:text-start lg:px-20">
        LOADING
      </div>
      <div>
        <div className="mb-5 md:mb-0">
          <div className=" px-5 md:px-10 lg:px-20">
            <div className="text-right font-metropolis text-4xl font-medium text-red-base md:text-6xl lg:text-7xl">
              {percent}%
            </div>
            <div>
              <Line
                percent={percent}
                strokeWidth={1}
                strokeColor="#BE1E2D"
                className="duration-1000"
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-center py-5 text-center font-montserrat text-sm uppercase text-red-base md:text-lg">
            © Pare India Limited 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLoader;
