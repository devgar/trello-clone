import { connect } from 'react-redux'

import { CARDS_RENAME } from './services/redux/actions'

import './TrelloCard.css'

function TrelloCard({ cardId, title, changeTitle }) {
	return (
		<div className="TrelloCard">
			<p onClick={() => changeTitle(cardId, title)} >{title}</p>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	changeTitle(id, title) {
		return dispatch({
			type: CARDS_RENAME,
			id: id,
			title: prompt("Cambiar el título a la tarea", title) || title
		})
	}
})

const connecTedTrelloCard = connect(null, mapDispatchToProps)(TrelloCard)

export default connecTedTrelloCard