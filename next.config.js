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
