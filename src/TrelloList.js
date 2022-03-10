import { connect } from 'react-redux'

import { LISTS_RENAME, CARDS_ADD } from './services/redux/actions'

import TrelloCard from './TrelloCard'

import './TrelloList.css'

function TrelloList({ listId, title, cards, addCard, changeTitle }) {
	return (
		<div className="TrelloList">
			<div className="ListHeader">
				<h1 onClick={() => changeTitle(listId, title)} >{title}</h1>

			</div>
			<div className="Cards">
				{ cards.filter(({ list_id }) => list_id === listId).map(({ id, title }) => (
					<TrelloCard cardId={id} title={title} key={id} />
				) )}
			</div>
			<button onClick={() => addCard(listId)} >Add Card</button>
		</div>
	)
}

const mapStateToProps = ({ cards, lists }) => ({ cards, lists })

const mapDispatchToProps = dispatch => ({ 
	addCard(id) {
		let title = prompt("Título para la nueva tarjeta", "Sin título")
		if (title !== null) {
			return dispatch({
				type: CARDS_ADD,
				data: {
					title: title || "Sin título",
					list_id: id
				}
			})
		}
	},
	changeTitle(id, title) {
		return dispatch({
			type: LISTS_RENAME,
			id: id,
			title: prompt("Cambiar título a la lista", title) || title
		})
	}
})

const connectedTrelloList = connect(mapStateToProps, mapDispatchToProps)(TrelloList)

export default connectedTrelloList