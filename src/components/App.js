import React, {Component} from 'react'

import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'

export default class App extends Component {
 	render() {
 		return <div className="application">
 			<Header />
 			{this.props.children}
 			<Footer />
 		</div>
 	}
}