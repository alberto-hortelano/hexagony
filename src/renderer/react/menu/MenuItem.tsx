import * as React from "react";
import { connect } from "react-redux";
import { MenuStructure } from "./Menu";

type MenuItemProps = {
	text: string,
	children: MenuStructure,
	action: Action<string>,
	handleClick: ActionHandler
};

const MenuItem: React.FC<MenuItemProps> = ({ text, children, action, handleClick }) => {
	const renderSubmenu = () => {
		if (!children) {
			return;
		}
		let n = 0;
		let menuItems = [];
		for (const name in children) {
			if (children.hasOwnProperty(name)) {
				const element = children[name];
				console.log(n, name, children[name]);
				menuItems.push(<MenuItemCT key={n++} action={element.action} text={name} children={element.children} />);
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
			<button onClick={() => handleClick(action)} className="pure-menu-link">{text}</button>
			{renderSubmenu()}
		</li>
	);
};
const mapDispatchToProps = (dispatch: ActionHandler) => {
	return {
		handleClick: (action: Action<string>) => {
			console.log("log: action", action);
			if (action) {
				dispatch(action);
			}
		}
	}
}
export const MenuItemCT = connect(
	null,
	mapDispatchToProps
)(MenuItem);
