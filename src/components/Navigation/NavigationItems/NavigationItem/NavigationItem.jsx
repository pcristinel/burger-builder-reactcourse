import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
	return (
		<li className={classes.NavigationItem}>
			<NavLink to={props.link} activeClassName={classes.active} exact>
				{props.children}
			</NavLink>
		</li>
	);
};

export default NavigationItem;
