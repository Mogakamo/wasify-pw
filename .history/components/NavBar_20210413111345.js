//Navigation bar for the whole website 
import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            < div class = "container mx-auto bg-purple-300 p-5" >
              <nav class="flex-row md:justify-between">
                  <div class="flex flex-row justify-between">
                      <a href="#">Logo</a>

                      <p id=""></p>
                  </div>
                  <ul class="flex flex-row md:flex md:flex-row">
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