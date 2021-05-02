//call to action section 
import React from 'react'

class CallToAction extends React.Component {
    render() {
        return (
          <>
            <>
              {/* component */}
              <div className="container m-auto px-6 py-40">
                <div className="flex flex-col md:flex-row items-center justify-between relative w-100 h-auto md:h-64 bg-100 shadow-2xl rounded-lg p-8">
                  <div className="w-8/12 text-2xl">
                    <img
                      alt="quote"
                      className="float-left mr-1"
                      src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"
                    />
                    <span className="flex">
                      Need to get a skill to help you out with 
                      your job? 
                      Worry no more, we got you covered..
                    </span>
                  </div>
                  <div className="relative shadow-md font-medium my-5 py-2 px-4 text-white cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48">
                    <span className="absolute h-3 w-3 right-0 top-0 animate-ping inline-flex rounded-full h-3 w-3 bg-red-600 text-white"></span>
                    GET STARTED
                  </div>
                </div>
              </div>
            </>
          </>
        );
    }
}

export default CallToAction