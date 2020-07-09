import React from 'react';

import styles from './Order.module.css';

const Order = (props) => {
	const ingredients = [];

	console.log(props.ingredients);

	for (const ingredientName in props.ingredients) {
		if (props.ingredients.hasOwnProperty(ingredientName)) {
			const element = props.ingredients[ingredientName];
			console.log(element);

			ingredients.push({ name: ingredientName, amount: props.ingredients[ingredientName] });
		}
	}

	const ingredientOutput = ingredients.map((ingredient) => {
		return (
			<span key={ingredient.name}>
				{ingredient.name} ({ingredient.amount})
			</span>
		);
	});

	return (
		<div className={styles.Order}>
			<p>Ingredients: {ingredientOutput}</p>
			<p>
				Price: <strong>USD {props.price.toFixed(2)}</strong>
			</p>
		</div>
	);
};

export default Order;
