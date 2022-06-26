/* eslint-env node */
// Local imports
import { Ackee } from '../hooks/useAckee.js'





/**
 * @typedef WebVitals
 * @property {string} name The name of the web vital as provided by Next.js.
 * @property {number} value The value of the web vital.
 */

/**
 * Receives a web vital from Next.js and sends it along to our analytics platform.
 *
 * @param {WebVitals} data An object representing a single web vital provided by Next.js.
 */
export function reportWebVitals(data) {
	const {
		name,
		value,
	} = data

	let fullName = name

	// eslint-disable-next-line default-case
	switch (name) {
		case 'CLS':
			fullName = 'Cumulative Layout Shift'
			break

		case 'FCP':
			fullName = 'First Contentful Paint'
			break

		case 'FID':
			fullName = 'First Input Delay'
			break

		case 'LCP':
			fullName = 'Largest Contentful Paint'
			break

		case 'TTFB':
			fullName = 'Time to First Byte'
			break

		case 'Next.js-hydration':
			fullName = 'Next.js Hydration'
			break
	}

	Ackee.trackAction(process.env.ACKEE_WEB_VITALS_TRACKING_ID, {
		key: fullName,
		value: Math.round(name === 'CLS' ? value * 1000 : value),
	})
}
