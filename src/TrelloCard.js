import { connect } from 'react-redux'

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
			type: 'CARDS/RENAME',
			id: id,
			title: prompt("Cambiar el título a la tarea", title) || title
		})
	}
})

const connecTedTrelloCard = connect(null, mapDispatchToProps)(TrelloCard)

export default connecTedTrelloCard