import React from 'react'
import words from './words'

class Typing extends React.Component {
	componentDidMount() {
		const options = {
			strings: ,
			typeSpeed: ,
			backSpeed: 100,
			loop: true,
			cursorChar: "\"
		}
	}

	componentWillUnmount() {
		this.typed.destroy()
	}
	render() {
		return(
			<>
			  <span 
			  	style={{ whiteSpace: "pre" }}
				ref{(el) => {
					this.el = el;
				}}
			  />
			</>
		)
	}
}

export default Typing 