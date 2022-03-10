export const LISTS_ADD = 'LISTS_ADD'
export const LISTS_RENAME = 'LISTS_RENAME'

export const CARDS_ADD = 'CARDS_ADD'
export const CARDS_RENAME = 'CARDS_RENAME'

export const list_add = () => {
	let title = prompt("Título para la nueva lista", "Sin título")
	if (title !== null) {
		return {
			type: LISTS_ADD,
			data: {
				title: title || "Sin título"
			}
		}
	}
}

export const list_rename = (list_id, title) => {
	return {
		type: LISTS_RENAME,
		data: {
			id: list_id,
			title: prompt("Cambiar título a la lista", title) || title
		}
	}
}

export const card_add = (list_id) => {
	let title = prompt("Título para la nueva tarjeta", "Sin título")
	if (title !== null) {
		return {
			type: CARDS_ADD,
			data: {
				title: title || "Sin título",
				list_id: list_id
			}
		}
	}
}

export const card_rename = (card_id, title) => {
	return {
		type: CARDS_RENAME,
		data: {
			id: card_id,
			title: prompt("Cambiar título a la tarjeta", title) || title
		}
	}
}