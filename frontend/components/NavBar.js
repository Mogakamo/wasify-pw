import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function NavBar() {
    const router = useRouter()
    const isActive = (r) => {
        if (r === router.pathname) {
            return "acive"
        }
        else {
            return ""
        }
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Wasify</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <Link href="/cart">
                                    <a class={"nav-link" + isActive('/cart')} >
                                        <i class="fab fa-opencart"></i>Cart
                                        </a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href="sign_in">
                                    <a class={"nav-link" + isActive('/sign_in')}>
                                        <i class="fas fa-user"></i>Sign in
                                    </a>
                                </Link>
                            </li>

                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    User Name
          </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">profile</a></li>
                                    <li><a class="dropdown-item" href="#">logout</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar