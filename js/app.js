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
				available: true
			},
			{
				id: 2,
				img: 'http://lorempixel.com/251/200/food/',
				name: 'item 2',
				description: 'Sed imperdiet velit sem, non feugiat orci volutpat sed. Donec egestas augue quis rhoncus tincidunt.',
				price: 7,
				available: true
			},
			{
				id: 3,
				img: 'http://lorempixel.com/250/201/food/',
				name: 'item 3',
				description: 'Praesent tincidunt tellus eget felis ultrices rutrum. Praesent blandit nibh faucibus lectus pulvinar egestas.',
				price: 3,
				available: true
			},
			{
				id: 4,
				name: 'item 4',
				description: 'eget felis ultrices rutrum. Praesent nibh faucibus lectus pulvinar egestas.',
				price: 8,
				available: false
			}
		],
		title: 'Order Here',
		checkbox: false,
		alert: false,
		cart: false,
		nav : {
			open: false,
			content: ">"
		}
	},

	methods: {
		// adds item to cart
		addItem(item) {
			this.order.push(item);
			console.log('added ' + item.name);
		},

		//removes item from cart
		removeItem(item) {
			this.order.splice(item, 1);
			console.log('removed ' + item.name);
		},
		//empties all items from the cart
		emptyCart() {
			this.order = [];
			console.log('emptied cart');
		},
		//functions for opening and closing cart dropdown from right side nav
		openCart() {
			this.cart = true;
			console.log('opened cart')
		},
		closeCart() {
			this.cart = false;
			console.log('opened cart')
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
		}
	},

	mounted() {
		// Initial logic here.
		// ...
	}
});
