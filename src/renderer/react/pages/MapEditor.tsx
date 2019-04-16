import * as React from "react";
import { BoardCT } from "../board/Board";
import { Menu, MenuStructure } from "../menu/Menu";
import { actions } from "../../../state/reducers/actions";


export const MapEditor: React.FC = () => {
	const editorMenu: MenuStructure = {
		terrain: {
			children: {
				dust: {
					action: {
						type: actions.selectMapTerrain,
						payload: 'dust'
					}
				},
				grass: {
					action: {
						type: actions.selectMapTerrain,
						payload: 'grass'
					}
				}
			}
		},
		something: {
			children: {
				withAction: {
					action: {
						type: actions.selectMapTerrain,
						payload: 'withAction'
					},
					children: {
						sub2: {
							children: {
								sub3: {
									action: {
										type: actions.selectMapTerrain,
										payload: 'sub3'
									}
								}
							}
						}
					}
				},
				sub12: {
					children: {
						sub21: {
							action: {
								type: actions.selectMapTerrain,
								payload: 'sub21'
							}
						}
					}
				}
			}
		},
		nothing: {
			action: {
				type: actions.selectMapTerrain,
				payload: 'nothing'
			}
		}
	}
	return (
		<div id="map-editor">
			<Menu structure={editorMenu} />
			<BoardCT height={30} width={50} />
		</div>
	);
}
