import ID from '../../lib/id.js'

import { LISTS_ADD, LISTS_RENAME, CARDS_ADD, CARDS_RENAME } from './actions.js'

const initialState = {
	lists: [], 
	cards: [],
}

const mutations = {
	[LISTS_ADD](state, data) {
		data.id ??= ID()
		return { ...state, lists: [...state.lists, data] }
	},
	[LISTS_RENAME]: (state, data) => ({ 
		...state,
		lists: state.lists.map(list => 
			list.id === data.id 
			? { ...list, title: data.title } 
			: list
		)
	}),
	[CARDS_ADD](state, data) {
		data.id ??= ID()
		return { ...state, cards: [...state.cards, data] }
	},
	[CARDS_RENAME]: (state, data) => ({
		...state,
		cards: state.cards.map(card =>
			card.id === data.id
			? { ...card, title: data.title }
			: card
		)
	}),
}

function reducer(state = initialState, { type, data }) {
  return mutations[type] ? mutations[type](state, data) : state
}

export default reducer