import { connect } from 'react-redux'

import './TrelloList.css'

function TrelloList({ uid, title, cards, addCard, changeTitle }) {
	return (
		<div className="TrelloList">
			<div className="ListHeader">
				<h1 onClick={() => changeTitle(uid, title)} >{ title }</h1>
				<a href="#" >X</a>
			</div>
			<div className="Cards">
				{ cards.filter(({ list_id }) => list_id === uid).map(({ title }, index) => (
					<p className="TrelloCard" key={index}>{title}</p>
				) )}
			</div>
			<button onClick={() => addCard(uid)} >Add Card</button>
		</div>
	)
}

const mapStateToProps = ({ cards, lists }) => ({ cards, lists })

const mapDispatchToProps = dispatch => ({ 
	addCard(id) {
		let title = prompt("Título para la nueva tarjeta", "Sin título")
		if (title !== null) {
			return dispatch({
				type: 'CARDS/ADD',
				data: {
					title: title || "Sin título",
					list_id: id
				}
			})
		}
	},
	changeTitle(id, title) {
		return dispatch({
			type: 'LISTS/RENAME',
			id: id,
			title: prompt("Cambiar título a la lista", title) || title
		})
	}
})

const connectedTrelloList = connect(mapStateToProps, mapDispatchToProps)(TrelloList)

export default connectedTrelloList