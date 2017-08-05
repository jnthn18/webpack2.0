const DEFAULT_STATE = {
	message: "Hello World!",
}

export default (state = DEFAULT_STATE, {type, payload})=> {
	switch(type) {
		default:
			return state
	}
}