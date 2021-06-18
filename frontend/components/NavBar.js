import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { DataContext } from '../store/GlobalState'
import Cookie from 'js-cookie'

function NavBar() {
    const router = useRouter()

    const { state, dispatch } = useContext(DataContext)
    const { auth } = state

    const handleLogout = () => {
        Cookie.remove('refreshtoken', { path: 'api/auth/accessToken' })
        localStorage.removeItem('firstLogin')
        dispatch({ type: 'AUTH', payload: {} })
        dispatch({ type: 'NOTIFY', payload: { success: 'Logged out!' } })
    }

    const isActive = (r) => {
        if (r === router.pathname) {
            return "acive"
        }
        else {
            return ""
        }
    }
    const loggedRouter = () => {
        return (
            <>
                <li className="nav-item dropdown">
                    <a className="text-reset me-3 dropdown-toggle hidden nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-bell"></i>
                        <span class="badge rounded-pill badge-notification bg-danger">1</span>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <ul>
                            <li className="nav-item dropdown"
                                style={{ listStyleType: "none" }}>
                                <a class="dropdown-item">Some news</a>
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <a class="dropdown-item" href="#">Another news</a>
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={auth.user.avatar} alt={auth.user.avatar}
                            style={{
                                borderRadius: '50%', width: '30px', height: '30px',
                                transform: 'translateY(-3px)', marginRight: '3px'
                            }} /> {auth.user.name}
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link href="/profile">
                            <a className="dropdown-item">Profile</a>
                        </Link>
                        {
                            auth.user.role === 'admin' && adminRouter()
                        }
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                    </div>
                </li>
            </>
        )
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                {/**Toggle button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation"><i class="fas fa-bars"></i></button>
                {/**collapsible wrapper */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    {/**Navbar brand */}
                    <Link href="/">
                        <a className="navbar-brand mt-2 mt-lg-0"> WASIFY</a>
                    </Link>
                    {/**Left links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto px-2">
                        <li class="nav-item">
                            <Link href="/">
                                <a className="nav-link" >Home</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#service">Features</a>
                        </li>
                        <li class="nav-item">
                            <Link href="/">
                                <a className="nav-link">Pricing</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#blog">Blog</a>
                        </li>
                    </ul>
                    <div class="d-flex align-items-center">
                        <form class="d-flex input-group w-auto">
                            <input
                                type="search"
                                class="form-control rounded"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search-addon"
                            />
                            <span class="input-group-text border-0" id="search-addon">
                                <i class="fas fa-search"></i>
                            </span>
                        </form>
                    </div>
                    {
                        Object.keys(auth).length === 0
                            ? <li className="nav-item">
                                <Link href="/sign_in">
                                    <a className={"nav-link" + isActive('/signin')}>
                                        <div class="col-md-12 mt-3 text-center">
                                            <a class="btn btn-info btn-md border-0 text-white"><span>login</span></a>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            : loggedRouter()
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavBar