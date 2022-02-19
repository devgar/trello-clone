import { useState } from 'react'

import TrelloList from './TrelloList.js'

import './TrelloBoard.css'

function TrelloBoard() {
	const [lists, setLists] = useState([
		{ title: 'Inicio' },
	])

	const addList = () => {
		let title = prompt("Título para la nueva lista", "Sin título") 
		if (title !== null) setLists([...lists, { title: title || "Sin título" }])
	}

	return (
		<div className="TrelloBoard">
			{ lists.map(({ title }, index) => 
				(<TrelloList key={index} title={title} />))
			}
			<button onClick={addList}>Add List</button>
		</div>
	)
}

export default TrelloBoard