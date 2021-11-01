import React, { Component } from 'react';
import Header from '../components/Header'

// We must add ALL the supported languages we want to use for Moment.js here
import 'moment/locale/es';

export class Layout extends Component {
	static displayName = Layout.name;

	static myToast = null;

	// constructor() {
	// 	super();
	// }

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	render() {
		return(
		<>
			<Header />
			<main>{this.props.children}</main>
		</>)
	}
}