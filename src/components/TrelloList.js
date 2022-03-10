import { useDispatch, useSelector } from 'react-redux'

import { lists_rename, cards_add } from '../services/redux/actions'

import TrelloCard from './TrelloCard'

import './TrelloList.css'

function TrelloList({ listId, title }) {

	const cards = useSelector(state => state.cards)
	const dispatch = useDispatch()
	
	return (
		<div className="TrelloList">
			<div className="ListHeader">
				<h1 onClick={() => dispatch(lists_rename(listId, title))} >{title}</h1>

			</div>
			<div className="Cards">
				{ cards.filter(({ list_id }) => list_id === listId).map(({ id, title }) => (
					<TrelloCard cardId={id} title={title} key={id} />
				) )}
			</div>
			<button onClick={() => dispatch(cards_add(listId))} >Add Card</button>
		</div>
	)
}

export default TrelloList