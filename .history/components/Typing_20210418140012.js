import React from 'react'
import words from './words'
import Typed from 'typed.js'

class Typing extends React.Component {
	componentDidMount() {
		const options = {
			strings: words,
			typeSpeed: 100,
			backSpeed: 100,
			loop: true,
			cursorChar: "\"",
		};
		this.typed = new Typed(this.el, options);
	}

	componentWillUnmount() {
		this.typed.destroy()
	}
	render() {
		return(
			<>
			  <span 
			  	style={{ whiteSpace: "pre" }}
				ref={(el) => {
					this.el = el;
				}}
			  />
			</>
		)
	}
}

export default Typing 