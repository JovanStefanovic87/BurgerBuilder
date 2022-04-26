import React from 'react';
import classes from './CheckoutSummery.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const CheckoutSummery = (props) => {
	return (
		<div className={classes.CheckoutSummery}>
			<h1>We hope it tastes well!</h1>
			<div style={{ width: '100%', margin: 'auto' }}>
				<Burger ingredients={props.ingredients} />
			</div>
			<Button propType="Danger" click={props.checkoutCanceled}>
				CANCEL
			</Button>
			<Button propType="Success" click={props.checkoutContinued}>
				CONTINUE
			</Button>
		</div>
	);
};

export default CheckoutSummery;
