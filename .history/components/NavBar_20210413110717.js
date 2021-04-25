//Navigation bar for the whole website 
import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <>
              <nav>
                  <div>
                      <a href="#">Logo</a>
                  </div>
                  <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Marketplace</a></li>
                      <li><a href="#">Cooooooonta</a></li>
                  </ul>
              </nav>
            </>
        )
    }
};

export default Navbar