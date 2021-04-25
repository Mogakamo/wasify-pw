/** This is the layout of the website
 *  - this component will depict how the homepage and also the design of the 
 *      other components how they will appear.
 * NB: This will be for the sake of easier execution 
 */
//imports for all the other component
//save for the loader.js
import Hero from './Hero'
import Footer from './Footer' 
import NavBar from './NavBar'
import Service from './Services'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'
import Feature from './Feature'
import Blog from './Blog'
import Pricing from './Pricing'


//Layout
const Layout = () => {
    return(
        <>

        <Hero /><br><><>

        <Feature />

        <Service />

        <Pricing />

        {/**<Testimonials />*/}

        <Blog />

        <CallToAction />

        <Footer />
        </>
    )
}



//exporting the component
export default Layout;
