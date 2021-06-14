import { getData } from '../backend/utils/fetchData'

const Home = () => {
  return (
    <>
      Home
    </>
  )
}

export async function getServerSideProps() {

  const res = await getData('service');
  console.log(res)
  //server side rendering
  return {
    props: {}, // will be passed to the page component as props
  }
}


export default Home