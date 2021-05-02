//testimonials 

const Testimonials = () => {
    return (
      <>
        <section className="testimonials py-5 text-white px-1 px-md-5 margin-top-xl">
          <img
            src="https://raw.githubusercontent.com/solodev/testimonial-slider-fullwidth/master/solodev-logo-stacked.png"
            className="icon-overlay"
          />
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="pt-2 text-center font-weight-bold">
                  Our Customers Are Seeing Big Results
                </h2>
                <div className="carousel-controls testimonial-carousel-controls">
                  <div className="control d-flex align-items-center justify-content-center prev mt-3">
                    <i className="fa fa-chevron-left" />
                  </div>
                  <div className="control d-flex align-items-center justify-content-center next mt-3">
                    <i className="fa fa-chevron-right" />
                  </div>
                  <div className="testimonial-carousel">
                    <div className="h5 font-weight-normal one-slide mx-auto">
                      <div className="testimonial w-100 px-3 text-center d-flex flex-direction-column justify-content-center flex-wrap align-items-center">
                        <div className="message text-center blockquote w-100">
                          "They’ve been consistent throughout the years and
                          grown together with us. Even as they’ve grown, they
                          haven’t lost sight of what they do. Most of their key
                          resources are still with them, which is also a
                          testament to their organization."
                        </div>
                        <div className="blockquote-footer w-100 text-white">
                          Jim Joe, WebCorpCo
                        </div>
                      </div>
                    </div>
                    <div className="h5 font-weight-normal one-slide mx-auto">
                      <div className="testimonial w-100 px-3 text-center  d-flex flex-direction-column justify-content-center flex-wrap align-items-center">
                        <div className="message text-center blockquote w-100">
                          "Our website uses Solodev to craft a website capable
                          of representing its diverse residents. The website
                          features a newsroom with the latest events, an
                          interactive calendar, and a mobile app that puts the
                          resources at a user’s fingertips."
                        </div>
                        <div className="blockquote-footer w-100 text-white">
                          Jim Joe, WebCorpCo
                        </div>
                      </div>
                    </div>
                    <div className="h5 font-weight-normal one-slide mx-auto">
                      <div className="testimonial w-100 px-3 text-center  d-flex flex-direction-column justify-content-center flex-wrap align-items-center">
                        <div className="message text-center blockquote w-100">
                          Solodev is a great company to partner with! We are
                          extremely happy with the software, service, and
                          support.
                        </div>
                        <div className="blockquote-footer w-100 text-white">
                          Jim Joe, WebCorpCo
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Testimonials