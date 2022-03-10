import { connect } from 'react-redux'

import { LISTS_ADD } from './services/redux/actions.js'

import TrelloList from './TrelloList.js'

import './TrelloBoard.css'

function TrelloBoard({  lists, addList }) {
	return (
		<div className="TrelloBoard">
			{ lists.map(({ id, title }) => 
				(<TrelloList key={id} uid={id} title={title} />))
			}
			<button onClick={() => addList()}>Add List</button>
		</div>
	)
}

const mapStateToProps = ({ lists }) => ({ lists })

const mapDispatchToProps = dispatch => ({ 
	addList() {
		let title = prompt("Título para la nueva lista", "Sin título")
		if (title !== null) {
			return dispatch({
				type: LISTS_ADD,
				data: {
					title: title || "Sin título"
				}
			})
		}
	}
})

const connectedTrelloBoard = connect(mapStateToProps, mapDispatchToProps)(TrelloBoard)

export default connectedTrelloBoard