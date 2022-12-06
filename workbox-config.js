module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,ico,png,jpg,css,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};