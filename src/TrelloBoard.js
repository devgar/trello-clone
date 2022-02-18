import { useState } from 'react'

import TrelloList from './TrelloList.js'

import './TrelloBoard.css'

function TrelloBoard() {
	const [lists, setLists] = useState([
		{},
	])

	const addList = () => {
		setLists([...lists, {}])
	}

	return (
		<div className="TrelloBoard">
			{ lists.map((_list, index) => (<TrelloList key={index} />)) }
			<button onClick={addList}>Add List</button>
		</div>
	)
}

export default TrelloBoard