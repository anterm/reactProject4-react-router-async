import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
	render() {
		return <div className="header">
			<Link to="/">Главная</Link>
			<Link to="/books">Книги</Link>
			<Link to="/about">О нас</Link>
		</div>
	}
}