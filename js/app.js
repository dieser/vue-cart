const app = new Vue({
	el: '#app',

	data: {
		order: [],
		items: [
			{
				id: 1,
				img: 'http://lorempixel.com/250/200/food/',
				name: 'item 1',
				description: 'Pellentesque sit amet bibendum est, nec vehicula turpis.',
				price: 2,
				category: {
					id: 1,
					name: 'food'
				},
				available: true,
			},
			{
				id: 2,
				img: 'http://lorempixel.com/251/200/food/',
				name: 'item 2',
				description: 'Sed imperdiet velit sem, non feugiat orci volutpat sed. Donec egestas augue quis rhoncus tincidunt.',
				price: 7,
				category: {
					id: 1,
					name: 'food'
				},
				available: true
			},
			{
				id: 3,
				img: 'http://lorempixel.com/250/201/food/',
				name: 'item 3',
				description: 'Praesent tincidunt tellus eget felis ultrices rutrum. Praesent blandit nibh faucibus lectus pulvinar egestas.',
				price: 3,
				category: {
					id: 2,
					name: 'drink'
				},
				available: true
			},
			{
				id: 4,
				img: 'http://lorempixel.com/250/201/food/',
				name: 'item 4',
				description: 'eget felis ultrices rutrum. Praesent nibh faucibus lectus pulvinar egestas.',
				price: 8,
				category: {
					id: 2,
					name: 'drink'
				},
				available: false
			},
			{
				id: 5,
				img: 'http://lorempixel.com/250/201/food/',
				name: 'item 5',
				description: 'ultrices rutrum. Praesent nibh faucibus lectus pulvinar egestas.',
				price: 12,
				category: {
					id: 2,
					name: 'drink'
				},
				available: true
			}
		],
		title: 'Order Here',
		checkbox: false,
		alert: false,
		errors: [],
		currentProducts: [],
		cart: {
			open: false,
			empty: "You currently have no items in your cart"
		},
		nav : {
			open: false,
			content: ">"
		}
	},

	methods: {
		//sorts into categories
		getCategories() {
			let categories = [];

			this.items.forEach(item => {
				let found = false;
				categories.forEach(category => {
					if ( item.category.id === category.id) {
						found = true;
					}
				});
				if(!found) {
					categories.push(item.category);
				}
			})
			return categories;
		},
		// adds item to cart
		addItem(item) {
			this.order.push(item);
			console.log('added ' + item.name);
		},

		//removes item from cart
		// removeItem(item) {
		// 	this.order.splice(item, 1);
		// 	console.log('removed ' + item.name);
		// },
		removeItem(item) {
			console.log(this.order.length, item);
		    if (item >= 0 && item < this.order.length) {

		        this.order.splice(item, 1);
		        // console.log('removed ' + item.name);
		    } else {
		        throw new Error('Item "' + item + '" does not exist.');
				var message = 'Sorry something has gone wrong. Please empty the cart';
				this.errors.push(message);
		    }
		},
		//empties all items from the cart
		emptyCart() {
			this.order = [];
			this.checkbox = false;
			console.log('emptied cart');
		},
		//functions for opening and closing cart dropdown from right side nav
		openCart() {
			this.cart.open = true;
			console.log('opened cart');
		},
		closeCart() {
			this.cart.open = false;
			console.log('opened cart');
		},
		openNav() {
			// var content = document.querySelector('.content');
			this.nav.open = true;
			this.nav.content = "<";
			console.log('nav opened');
		},
		closeNav() {
			this.nav.open = false;
			this.nav.content = ">";
			console.log('nav closed');
		},
		onError() {
			if (this.errors !== []) {
				alert(this.errors);
			} else {
				console.log(okeh);
			}
		}
	},

	mounted() {
		// Initial logic here.
		// ...
	}
});
