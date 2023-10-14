/* eslint-env node */

/**
 * @typedef RedirectConfig
 * @property {string} source The route to be redirected
 * @property {string} destination The destination to which the request should be redirected
 * @property {boolean} permanent Whether this redirect should be a 307 (temp) or 308 (permanent)
 */

module.exports = {
	images: {
		domains: [
			'placehold.co',
		],
	},

	/**
	 * @returns {RedirectConfig[]} An array of redirect configs.
	 */
	redirects() {
		return [
			{
				source: '/rsi-org',
				destination: 'https://robertsspaceindustries.com/orgs/QLOG',
				permanent: false,
			},
			{
				source: '/code-of-conduct',
				destination: 'https://drive.google.com/file/d/1Pp1IEf0En0a2-AjFUO-bF2O0PR8usLvo/view',
				permanent: false,
			},
			{
				source: '/discord',
				destination: 'https://discord.gg/ZufmY94NKN',
				permanent: true,
			},
		]
	},
}
