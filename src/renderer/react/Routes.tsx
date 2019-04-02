import * as React from "react";
import { Provider } from "react-redux";
import { Route } from 'react-router-dom';
import { BoardCT } from "./components/Board";
import store from "../../state/store";
import { MapEditor } from "./pages/MapEditor";

if (typeof window !== 'undefined') console.log(window['store'] = store);

export const Routes: React.FC = () => (
	<Provider store={store}>
		<Route path='/game/play/:initialState' render={props => <BoardCT {...props} height={30} width={50} />} />
		<Route path='/game/select/' render={props => <div>HEYY </div>} />
		<Route path='/game/mapEditor/' render={props => <MapEditor />} />
	</Provider>
);