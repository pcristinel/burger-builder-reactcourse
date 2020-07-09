import React, { Component } from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	// componentDidUpdate(prevProps, prevState) {
	// 	console.log('[OrderSummary] didUpdate');
	// }

	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map((ingKey) => {
			return (
				<li key={ingKey}>
					<span style={{ textTransform: 'capitalize' }}>{ingKey}</span> : {this.props.ingredients[ingKey]}
				</li>
			);
		});

		return (
			<>
				<h3>Your Order</h3>
				<p>A delicious burger with the following ingredients:</p>
				<ul>{ingredientSummary}</ul>
				<p>
					<strong>Total Price: {this.props.price.toFixed(2)}</strong>
				</p>
				<p>Continue to Checkout?</p>
				<Button buttonType='Danger' clicked={this.props.purchaseCancelled}>
					CANCEL
				</Button>
				<Button buttonType='Success' clicked={this.props.purchaseContinued}>
					CONTINUE
				</Button>
			</>
		);
	}
}

export default OrderSummary;
