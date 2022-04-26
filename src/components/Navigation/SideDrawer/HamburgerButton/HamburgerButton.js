import React from 'react';
import classes from './HamburgerButton.css';

const HamburgerButton = (props) => (
	<div className={classes.HamburgerButton} onClick={props.toggle}>
		<div></div>
		<div></div>
		<div></div>
	</div>
);

export default HamburgerButton;
