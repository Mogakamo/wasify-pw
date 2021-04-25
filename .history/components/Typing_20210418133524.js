import React from 'react'
import words from './words'

class Typing extends React.Component {
	componentDidMount() {

	}

	componentWillUnmount() {
		this.typed
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