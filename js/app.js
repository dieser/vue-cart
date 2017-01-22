// const shop = {
// 	install(Vue, options) {
// 		Vue.test = 5;
// 		Vue.prototype.$shop = {
// 			items: [],
// 			order: [],
// 			currentCategory: [],
// 			currentProducts: [],
// 			addItem(item) {
// 				this.order.push(item);
// 				console.log('added ' + item.name);
// 			},
// 			fetchData() {
// 				this.$http.get('/data/items.json').then(response => {
// 					this.updateData(response.data);
// 				});
// 			},
// 			updateData(data) {
// 				this.items = data;
// 			},
// 			mounted() {
// 				this.fetchData();
// 				console.log("data fetched successfully");
// 			}
// 		};
// 	}
// };
// Vue.use(shop);

const app = new Vue({
	el: '#app',

	data: {
		order: [],
		items: [],
		title: 'Order Here',
		checkbox: false,
		alert: false,
		errors: [],
		currentCategory: 1,
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
	computed: {
		//sorts into categories
		categories() {
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
		categoryNames() {
			console.log(this.categories);
			return this.categories.map(category => category.name);
		}
	},

	methods: {
		fetchData() {
			this.$http.get( '/data/items.json').then(response => {
				this.updateData(response.data);
			});
		},
		updateData(data) {
			this.items = data;
		},
		findCategory(id) {
			for(let category of this.categories) {
				if(category.id === id) {
					return category;
				}
			}
			return null;
		},
		getProductsInCategory(id) {
			if (this.categories.map(category => category.id).indexOf(id) < 0) {
				throw new Error(`Category ${id} does not exist`);
			}
			return this.items.filter(item => item.category.id === id);
		},
		// adds item to cart
		addItem(item) {
			this.order.push(item);
			console.log('added ' + item.name);
		},

		//removes item from cart

		removeItem(item) {
			console.log(this.order.length, item);
		    if (item >= 0 && item < this.order.length) {
		        this.order.splice(item, 1);
		        // console.log('removed ' + item.name);
		    } else {
		        // throw new Error(`Item ${item} does not exist.`);
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
		this.fetchData();
		console.log("data fetched successfully");
	}
});
