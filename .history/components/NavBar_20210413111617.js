//Navigation bar for the whole website 
import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            < div class = "container mx-auto bg-purple-300 p-5" >
              <nav class="flex-row md:justify-between">
                  <div class="flex flex-row justify-between">
                      <a href="#">Logo</a>

                      <p id="hamburgerbtn" class="md:hidden bg-purple-800">
                          Menu
                      </p>
                  </div>
                  <ul class="hidden md:flex md:flex-row" id="mobileMenu">
                      <li class="pr-5"><a href="#">Home</a></li>
                      <li class="pr-5"><a href="#">Marketplace</a></li>
                      <li clas><a href="#">Contact Us</a></li>
                  </ul>
                  {/**Add the cart logo that redirects to the checkout page */}
              </nav>
            </div>
        )
    }
};

export default Navbar