//testimonials section 
import React from 'react'


class Testimonials extends React.Component {
    render() {
        return(
            <div className="relative flex items-center justify-center h-full overflow-x-hidden lg:overflow-hidden lg:h-screen">
  {/* Background Images */}
  <div className="absolute bg-curve">
    <img src="./images/pattern-curve.svg" alt="background curve" />
  </div>
  <div className="absolute bg-pattern">
    <img src="./images/pattern-bg.svg" alt="background pattern" />
  </div>
  <div className="absolute bg-quote">
    <img src="./images/pattern-quotes.svg" alt="background quotes" />
  </div>
  <div className="absolute flex buttons lg:shadow-2xl">
    {/* Prev Btn */}
    <div className="px-4 py-3 transition-all duration-100 ease-linear bg-white rounded-l-full cursor-pointer lg:py-4 lg:px-5 hover:bg-gray-300 prev-btn">
      <div className="arrow">
        <img src="./images/icon-prev.svg" alt="prev" />
      </div>
    </div>
    {/* Next Btn */}
    <div className="px-4 py-3 transition-all duration-100 ease-linear bg-white rounded-r-full cursor-pointer lg:py-4 lg:px-5 hover:bg-gray-300 next-btn">
      <div className="arrow">
        <img src="./images/icon-next.svg" alt="next" />
      </div>
    </div>
  </div>
  <div className="flex flex-row items-center max-w-sm p-10 lg:max-w-6xl lg:h-screen slider">
    {/* First Quote */}
    <div className="relative lg:flex lg:flex-row-reverse lg:justify-center lg:h-full">
      <div className="relative flex flex-col items-center p-5 lg:p-0 lg:absolute photo">
        <img className="rounded-md shadow-2xl" src="./images/image-tanya.jpg" alt="image 1" />
      </div>
      <div className="relative flex flex-col items-center mt-16 lg:items-start lg:px-24 lg:justify-between quote lg:mt-0">
        <p className="font-light text-center paragraph text-darkBlue lg:max-w-lg lg:text-left">
          “ I’ve been interested in coding for a while but never taken the
          jump, until now. I couldn’t recommend this course enough. I’m now
          in the job of my dreams and so excited about the future. ”
        </p>
        <div className="lg:flex lg:flex-row lg:items-end lg:mt-3">
          <h3 className="mt-4 text-sm font-bold text-center text-darkBlue lg:text-left lg:text-lg">
            Tanya Sinclair
          </h3>
          <p className="text-sm text-center text-grayBlue lg:text-left lg:text-base lg:ml-3">
            UX Engineer
          </p>
        </div>
      </div>
    </div>
    {/* Second Quote */}
    <div className="relative lg:flex lg:flex-row-reverse lg:justify-center lg:h-full">
      <div className="relative flex flex-col items-center p-5 lg:p-0 lg:absolute photo">
        <img className="rounded-md shadow-2xl" src="./images/image-john.jpg" alt="image 1" />
      </div>
      <div className="relative flex flex-col items-center mt-16 lg:items-start lg:px-24 lg:justify-between quote lg:mt-0">
        <p className="font-light text-center paragraph text-darkBlue lg:max-w-lg lg:text-left">
          “ If you want to lay the best foundation possible I’d recommend
          taking this course. The depth the instructors go into is
          incredible. I now feel so confident about starting up as a
          professional developer. ”
        </p>
        <div className="lg:flex lg:flex-row lg:items-end lg:mt-3">
          <h3 className="mt-4 text-sm font-bold text-center text-darkBlue lg:text-left lg:text-lg">
            John Tarkpor
          </h3>
          <p className="text-sm text-center text-grayBlue lg:text-left lg:text-base lg:ml-3">
            Junior Front-end Developer
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
        )
    }
}

export default Testimonials