import { useDispatch } from 'react-redux'

import { cards_rename } from '../services/redux/actions'

import './TrelloCard.css'

function TrelloCard({ cardId, title }) {

	const dispatch = useDispatch()
	
	return (
		<div className="TrelloCard">
			<p onClick={() => dispatch(cards_rename(cardId, title))} >{title}</p>
		</div>
	)
}

export default TrelloCard