module.exports = {
	bundles: {
		'vendor.bundle.js': [
			'./public/vendor/vue/dist/vue.js',
			'./public/vendor/vue-resource/dist/vue-resource.min.js'
		],
		'vendor.bundle.css': [
			'./public/type/icomoon/style.css'
		]
	},
	components: {
		filename: 'components.bundle',
		include: [
			'example',
			'checkbox',
			'modal'
		]
	}
};
