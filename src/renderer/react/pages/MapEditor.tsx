import * as React from "react";
import { BoardCT } from "../board/Board";
import { Menu, MenuStructure } from "../menu/Menu";


export const MapEditor: React.FC = () => {
	const editorMenu: MenuStructure = {
		terrain: {
			children: {
				dust: {
					action: 'SELECT_MAP_TERRAIN'
				},
				grass: {
					action: 'action'
				}
			}
		},
		something: {
			children: {
				withAction: {
					action: 'action',
					children: {
						sub2: {
							children: {
								sub3: {
									action: 'action'
								}
							}
						}
					}
				},
				sub12: {
					children: {
						sub21: {
							action: 'action'
						}
					}
				}
			}
		},
		nothing: {
			action: 'action'
		}
	}
	return (
		<div id="map-editor">
			<Menu structure={editorMenu} />
			<BoardCT height={30} width={50} />
		</div>
	);
}
