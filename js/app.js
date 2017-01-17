const app = new Vue({
	el: 'main',

	data: {
		order: [],
		items: [
			{
				name: 'item 1',
				description: 'Pellentesque sit amet bibendum est, nec vehicula turpis.',
				price: 2,
				available: true
			},
			{
				name: 'item 2',
				description: 'Sed imperdiet velit sem, non feugiat orci volutpat sed. Donec egestas augue quis rhoncus tincidunt.',
				price: 7,
				available: true
			},
			{
				name: 'item 3',
				description: 'Praesent tincidunt tellus eget felis ultrices rutrum. Praesent blandit nibh faucibus lectus pulvinar egestas.',
				price: 3,
				available: true
			},
			{
				name: 'item 4',
				description: ' eget felis ultrices rutrum. Praesent nibh faucibus lectus pulvinar egestas.',
				price: 8,
				available: false
			}
		],
		title: 'Order Here',
		checkbox: false,
		alert: false
	},

	methods: {
		addItem() {
		},
		emptyCart() {
			this.order = [];
			console.log('emptied cart');
		}
	},

	mounted() {
		// Initial logic here.
		// ...
	}
});
