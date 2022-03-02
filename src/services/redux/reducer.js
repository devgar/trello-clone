import ID from '../../lib/id.js'

const initialState = {
	value: 0, 
	lists: [], 
	cards: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'COUNTER/INCREMENTED':
			return { value: state.value + 1 }
    case 'COUNTER/DECREMENTED':
			return { value: state.value - 1 }
	
		case 'LISTS/ADD':
			action.data.id ??= ID()
			return { ...state, lists: [...state.lists, action.data] }
		case 'LISTS/RENAME':
			const lists = state.lists.map( list =>
				action.id === list.id ? {...list, title: action.title } : list 
			)
			return { ...state, lists }
	
		case 'CARDS/ADD':
			action.data.id ??= ID()
			return { ...state, cards: [...state.cards, action.data] }
		case 'CARDS/RENAME':
			const cards = state.cards.map( card =>
				action.id === card.id ? {...card, title: action.title } : card 
			)
			return { ...state, cards }

		default:
      return state
  }
}

export default reducer