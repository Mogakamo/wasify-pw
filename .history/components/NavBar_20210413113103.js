//Navigation bar for the whole website 
import React from 'react'

class NavBar extends React.Component {
    render() {
        return (
            < >
            <
            div className = "container mx-auto bg-purple-300 p-5" >
                <
                nav className = "flex-row md:justify-between" >
                <
                div className = "flex flex-row justify-between" >
                <
                a href = "#" > Logo < /a> <
                p id = "hamburgerbtn"
            className = "md:hidden bg-purple-800" >
                menu <
                /p> <
                /div> <
                ul className = "hidden md:flex md:flex-row"
            id = "mobileMenu" >
                <
                li className = "pr-5" > < a > Services < /a></li >
                <
                li className = "pr-5" > < a > Porfolio < /a></li >
                <
                li className = "pr-5" > < a > About < /a></li >
                <
                li > < a > Contact < /a></li >
                <
                /ul> <
                /nav> <
                /div> <
                style dangerouslySetInnerHTML = {
                    {
                        __html: "\n    .active{\n        display: block;\n    }    \n"
                    }
                }
            /> <
            />

        )
    }
};

export default NavBar