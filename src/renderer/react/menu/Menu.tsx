import * as React from "react";
import { CurrentActionCT } from "./CurrentAction";
import { MenuItemCT } from "./MenuItem";

export type MenuStructure = {
	[name: string]: {
		action?: Action<string>,
		children?: MenuStructure;
	}
}

export const Menu: React.FC<MenuStructure> = props => {
	const { structure } = props;

	const renderMenuItems = () => {
		let n = 0;
		let menuItems = [];
		for (const name in structure) {
			if (structure.hasOwnProperty(name)) {
				console.log(name, structure[name]);
				const { action, children } = structure[name];
				menuItems.push(<MenuItemCT key={n++} text={name} action={action} children={children} />);
			}
		}
		return menuItems;
	};
	return (
		<div className="pure-menu pure-menu-horizontal">
			<ul className="pure-menu-list">
				{renderMenuItems()}
			</ul>
			<CurrentActionCT />
		</div>
	);
}
