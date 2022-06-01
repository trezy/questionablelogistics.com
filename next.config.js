/* eslint-env node */
module.exports = {
	/**
	 * @returns {object[]} An array of redirect configs.
	 */
	redirects() {
		return [
			{
				source: '/',
				destination: 'https://robertsspaceindustries.com/orgs/QLOG',
				permanent: false,
			},
		]
	},
}
