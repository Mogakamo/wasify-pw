import { getData } from '../backend/utils/fetchData'
import { useState } from 'react'

const Home = (serviceProps) => {
  //const [services, setServices] = useState(props.services)
  

  return (
    <>

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