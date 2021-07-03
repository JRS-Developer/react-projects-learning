const reducer = (state, action) => {
	const { cart } = state;
	switch (action.type) {
		case 'CLEAR_CART': {
			return { ...state, cart: [] };
		}

		case 'REMOVE': {
			const newCart = cart.filter((item) => item.id !== action.payload);
			return { ...state, cart: newCart };
		}

		case 'INCREASE': {
			let tempCart = cart.map((item) => {
				if (item.id === action.payload) {
					return { ...item, amount: item.amount + 1 };
				}
				return item;
			});
			return { ...state, cart: tempCart };
		}

		case 'DECREASE': {
			let tempCart = cart
				.map((item) => {
					if (item.id === action.payload) {
						return { ...item, amount: item.amount - 1 };
					}
					return item;
				})
				.filter((item) => item.amount !== 0);
			return { ...state, cart: tempCart };
		}

		case 'GET_TOTAL': {
			let { total, amount } = cart.reduce(
				(cartTotal, cartItem) => {
					const { price, amount } = cartItem;
					const itemTotal = price * amount;

					cartTotal.amount += amount;
					cartTotal.total += itemTotal;
					return cartTotal;
				},
				{
					total: 0,
					amount: 0,
				}
			);

			total = parseFloat(total.toFixed(2));

			return { ...state, total, amount };
		}

		case 'LOADING': {
			return { ...state, loading: true };
		}

		case 'DISPLAY_ITEMS': {
			return { ...state, cart: action.payload, loading: false };
		}
		default: {
			throw new Error('No matching action type');
		}
	}
};

export default reducer;
