import * as React from "react";
import { setGlobalAction } from "../../../state/globalAction";

export type MenuStructure = {
	[name: string]: {
		action?: string,
		children?: MenuStructure;
	}
}
let n = 0;
const MenuItem = ({ text, children, action }) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
		setGlobalAction({ type: 'aa' });
		console.log('this is:', this);
	}
	const renderSubmenu = () => {
		if (!children) {
			return;
		}
		let menuItems = [];
		for (const name in children) {
			if (children.hasOwnProperty(name)) {
				const element = children[name];
				console.log(n, name, children[name]);
				menuItems.push(<MenuItem key={n++} action={element.action} text={name} children={element.children} />);
			}
		}
		return (
			<ul className="pure-menu-children">
				{menuItems}
			</ul>
		);
	};
	const className = `pure-menu-item ${children ? 'pure-menu-has-children ' : ''}pure-menu-allow-hover`

	return (
		<li className={className}>
			<button onClick={handleClick} className="pure-menu-link">{text}</button>
			{renderSubmenu()}
		</li>
	);
};

export const Menu: React.FC<MenuStructure> = props => {
	const { structure } = props;

	const renderMenuItems = () => {
		let menuItems = [];
		for (const name in structure) {
			if (structure.hasOwnProperty(name)) {
				console.log(name, structure[name]);
				const { action, children } = structure[name];
				menuItems.push(<MenuItem key={n++} text={name} action={action} children={children} />);
			}
		}
		return menuItems;
	};
	return (
		<div className="pure-menu pure-menu-horizontal">
			<ul className="pure-menu-list">
				{renderMenuItems()}
			</ul>
		</div>
	);
}
