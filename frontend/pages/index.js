import { getData } from '../backend/utils/fetchData'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Features from '../components/Feature'
import Testimonial from '../components/Testimonials'
import Blog from '../components/Blog'
import CallToAction from '../components/CallToAction'

const Home = (serviceProps) => {
  //const [services, setServices] = useState(props.services)


  return (
    <>
      <Head>
        <title>Wasify</title>
      </Head>

      <br/><br/><br/><br/><br/><br />

      <Features />
      <br/><br/><br/><br/><br/><br />

      <Testimonial />

      <br/><br/><br/><br/><br/><br />

      <Blog /><br />

      <CallToAction />      

      {/**Footer */}
      <footer className="page-footer font-small unique-color-dark text-white bg-dark">
        {/* Social buttons */}
        <div className="primary-color bg-info">
          <div className="container">
            {/*Grid row*/}
            <div className="row py-4 d-flex align-items-center">
              {/*Grid column*/}
              <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <h6 className="mb-0 white-text">Get connected with us on social networks!</h6>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-md-6 col-lg-7 text-center text-md-right">
                {/*Facebook*/}
                <a className="fb-ic ml-0">
                  <i className="fab fa-facebook white-text mr-4"> </i>
                </a>
                {/*Twitter*/}
                <a className="tw-ic">
                  <i className="fab fa-twitter white-text mr-4"> </i>
                </a>
                {/*Google +*/}
                <a className="gplus-ic">
                  <i className="fab fa-google-plus white-text mr-4"> </i>
                </a>
                {/*Linkedin*/}
                <a className="li-ic">
                  <i className="fab fa-linkedin white-text mr-4"> </i>
                </a>
                {/*Instagram*/}
                <a className="ins-ic">
                  <i className="fab fa-instagram white-text mr-lg-4"> </i>
                </a>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
        </div>
        {/* Social buttons */}
        {/*Footer Links*/}
        <div className="container mt-5 mb-4 text-center text-md-left">
          <div className="row mt-3">
            {/*First column*/}
            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Wasify</strong>
              </h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
              <p>Get to experience the best services in the country and affordable housing on our platform.</p>
            </div>
            {/*/.First column*/}
            {/*Second column*/}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Products</strong>
              </h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
              <p>
                <Link href="/services">
                  <a >E-Services</a>
                </Link>
              </p>
              <p>
                <Link href="/services">
                  <a >Boma</a>
                </Link>
              </p>
            </div>
            {/*/.Second column*/}
            {/*Third column*/}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Useful links</strong>
              </h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
              <p>
                <Link href="/services">
                  <a >Account</a>
                </Link>
              </p>
              <p>
                <Link href="/services">
                  <a >Become an affiliate</a>
                </Link>
              </p>
              <p>
                <Link href="/services">
                  <a >cart</a>
                </Link>
              </p>
              <p>
                <Link href="/services">
                  <a >categories</a>
                </Link>
              </p>
            </div>
            {/*/.Third column*/}
            {/*Fourth column*/}
            <div className="col-md-4 col-lg-3 col-xl-3">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Contact</strong>
              </h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60 }} />
              <p>
                <i className="fas fa-home" /> Eldoret, Kenya</p>
              <p>
                <i className="fa fa-envelope mr-3" /> info@wasify.co.ke</p>
              <p>
                <i className="fa fa-phone mr-3" /> + 254723569729</p>
              <p>
                <i className="fa fa-print mr-3" /> + 254775841201</p>
            </div>
            {/*/.Fourth column*/}
          </div>
        </div>
        {/*/.Footer Links*/}
        {/* Copyright */}
        <div className="footer-copyright text-center py-3">© 2021 Copyright:
          <a href="https://mdbootstrap.com/bootstrap-tutorial/"> wasify.co.ke </a>
        </div>
        {/* Copyright */}
      </footer>

    </>
  )
}

export async function getServerSideProps() {

  // const res = await getData('service');
  // console.log(res)
  // //server side rendering
  return {
    props: {
      // serviceProps: res.services,
      // result: res.result
    }, // will be passed to the page component as props
  }
}


export default Home