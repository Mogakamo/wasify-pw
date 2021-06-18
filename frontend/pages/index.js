import { getData } from '../backend/utils/fetchData'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Features from '../components/Feature'
import Testimonial from '../components/Testimonials'
import Blog from '../components/Blog'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Service from '../components/Services'

const Home = (serviceProps) => {
  //const [services, setServices] = useState(props.services)


  return (
    <>
      <Head>
        <title>Wasify</title>
      </Head>

      <Hero />

      <Main />  

      <Service />

      <Features />
      

      <Testimonial /><br /><br /><br /><br />

      

      <Blog /><br />

      <CallToAction />      

      <Footer />
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