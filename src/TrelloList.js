import { useState } from 'react'

import './TrelloList.css'

function TrelloList(props) {
	const [title, setTitle] = useState(props.title || "Sin título")
	const [cards, setCards] = useState([])

	const addTask = () => {
		let title = prompt("Título para la nueva tarjeta","Sin título")
		if (title !== null) setCards([...cards, { title: title || "Sin título" }])
	}

	const changeTitle = () => {
		setTitle(prompt("Cambiar título a la lista", title) || title)
	}

	return (
		<div className="TrelloList">
			<div className="ListHeader">
				<h1 onClick={changeTitle} >{ title }</h1>
				<a href="#" >X</a>
			</div>
			<div className="Cards">
				{ cards.map(({ title }, index) =>
					<p class="TrelloCard" key={index}>{ title }</p> )
				}
			</div>
			<button onClick={addTask} >Add Card</button>
		</div>
	)
}

export default TrelloList