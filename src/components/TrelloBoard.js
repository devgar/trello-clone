import { useDispatch, useSelector } from 'react-redux'

import { lists_add } from '../services/redux/actions.js'

import TrelloList from './TrelloList.js'

import './TrelloBoard.css'

function TrelloBoard() {

	const lists = useSelector(store =>  store.lists)
	const dispatch = useDispatch()

	return (
		<div className="TrelloBoard">
			{ lists.map(({ id, title }) => 
				(<TrelloList key={id} uid={id} title={title} />))
			}
			<button onClick={() => dispatch(lists_add())}>Add List</button>
		</div>
	)
}

export default TrelloBoard