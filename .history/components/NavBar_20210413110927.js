//Navigation bar for the whole website 
import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            < div class = "container mx-auto bg-purple-300 p-5" >
              <nav class="">
                  <div>
                      <a href="#">Logo</a>
                  </div>
                  <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Marketplace</a></li>
                      <li><a href="#">Contact Us</a></li>
                  </ul>
                  {/**Add the cart logo that redirects to the checkout page */}
              </nav>
            </div>
        )
    }
};

export default Navbar