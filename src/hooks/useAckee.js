/* eslint-env node */
// Module imports
import {
	useCallback,
	useEffect,
} from 'react'
import { useRouter } from 'next/router'
import * as ackee from 'ackee-tracker'





// Local imports
// import { useAuth } from 'contexts/AuthContext.js'





/**
 * @typedef AckeeHookContents
 * @property {Function} trackAction A function for tracking actions in Ackee.
 */

/**
 * @typedef AckeeOptions
 * @property {boolean} detailedMode Whether or not Ackee's detailed tracking mode is enabled.
 * @property {string} domainID The ID of this domain in Ackee.
 * @property {boolean} [ignoreLocalhost = true] Whether or not to ignore records created from localhost.
 * @property {boolean} [ignoreOwnVisits = true] Whether or not to ignore records created from the current IP.
 * @property {string} url The URL of the Ackee API.
 */

/**
 * @typedef ActionConfig
 * @property {string} key The key of the action.
 * @property {value} value The value of the action.
 */

/**
 * @typedef RecordConfig
 * @property {boolean} detailedMode Whether or not Ackee's detailed tracking mode is enabled.
 * @property {boolean} path The path of the record.
 */

/**
 * Singleton manager for Ackee analytics.
 */
export class Ackee {
	/****************************************************************************\
	 * Private static properties
	\****************************************************************************/

	static #detailedModeEnabled = false

	static #domainID = null

	static #instance = null

	static #isInitialised = false

	static #previousPath = null

	static #queue = []

	static #stopRecord = null

	static #url = null





	/****************************************************************************\
	 * Private static methods
	\****************************************************************************/

	/**
	 * Creates a record for the current session in Ackee.
	 *
	 * @param {RecordConfig} config Configuration for the record to be created.
	 */
	static createRecord(config) {
		if (process.env.NEXT_PUBLIC_DISABLE_ACKEE) {
			return
		}

		const {
			detailedMode,
			path,
		} = config

		const siteLocation = new URL(path, window.location.origin)

		const { stop } = Ackee.#instance.record(Ackee.#domainID, {
			...ackee.attributes(detailedMode),
			siteLocation,
			siteReferrer: document.referrer,
		})

		Ackee.#detailedModeEnabled = detailedMode
		Ackee.#stopRecord = stop
	}

	/**
	 * Disables detailed mode.
	 */
	static disableDetailedMode() {
		Ackee.#stopRecord?.()
		Ackee.createRecord({ detailedMode: false })
	}

	/**
	 * Enables detailed mode.
	 */
	static enableDetailedMode() {
		Ackee.#stopRecord?.()
		Ackee.createRecord({ detailedMode: true })
	}

	/**
	 * Initialises the Ackee singleton.
	 *
	 * @param {AckeeOptions} options The options with which this instance should be configured.
	 */
	static initialise(options) {
		if (process.env.NEXT_PUBLIC_DISABLE_ACKEE) {
			return
		}

		if (!Ackee.#isInitialised) {
			const {
				detailedMode,
				domainID,
				ignoreLocalhost = true,
				ignoreOwnVisits = true,
				url,
			} = options

			if (!domainID || !url) {
				throw new Error('Ackee cannot be initialised without a `domainID` and a `url`')
			}

			Ackee.#domainID = domainID
			Ackee.#url = url

			if (typeof window !== 'undefined') {
				Ackee.#instance = ackee.create(Ackee.#url, {
					detailed: detailedMode,
					ignoreLocalhost,
					ignoreOwnVisits,
				})
			}

			Ackee.#isInitialised = true

			Ackee.processQueue()
		}
	}

	/**
	 * Loop over the current queue and run any queued actions.
	 */
	static processQueue() {
		while (this.#queue.length) {
			const [
				method,
				...args
			] = this.#queue.shift()

			this.#instance[method](...args)
		}
	}

	/**
	 * Creates or updates the current session record.
	 *
	 * @param {RecordConfig} config Configuration for the record to be created.
	 */
	static record(config) {
		const { path } = config

		if (Ackee.#previousPath !== path) {
			Ackee.#previousPath = path

			Ackee.createRecord(config)
		}
	}

	/**
	 * Tracks an action on the current page.
	 *
	 * @param {string} eventID The ID of the event in Ackee.
	 * @param {ActionConfig} config Config to for the action.
	 */
	static trackAction(eventID, config) {
		if (process.env.NEXT_PUBLIC_DISABLE_ACKEE) {
			return
		}

		if (this.#isInitialised) {
			Ackee.#instance.action(eventID, config)
		} else {
			this.#queue.push(['action', eventID, config])
		}
	}





	/****************************************************************************\
	 * Public static getters/setters
	\****************************************************************************/

	/**
	 * @returns {boolean} Whether or not detailed mode is currently enabled.
	 */
	static get detailedModeEnabled() {
		return Ackee.#detailedModeEnabled
	}
}





/**
 * React hook sending analytics to Ackee.
 *
 * @returns {AckeeHookContents}
 */
export function useAckee() {
	const Router = useRouter()
	// const { settings } = useAuth()

	const record = useCallback(path => {
		Ackee.record({
			path,
			detailedMode: false,/* settings?.allowDetailedAnalytics */
		})
	}, [/* settings */])

	useEffect(() => {
		Ackee.initialise({
			detailedMode: false, //settings?.allowDetailedAnalytics,
			domainID: process.env.NEXT_PUBLIC_ACKEE_DOMAIN_ID,
			ignoreLocalhost: process.env.NODE_ENV === 'production',
			url: process.env.NEXT_PUBLIC_ACKEE_URL,
		})

		Router.events.on('routeChangeComplete', record)

		return () => Router.events.off('routeChangeComplete', record)
	}, [
		record,
		Router.events,
	])

	// useEffect(() => {
	// 	if (settings !== null) {
	// 		if (settings.allowDetailedAnalytics && !Ackee.detailedModeEnabled) {
	// 			Ackee.enableDetailedMode()
	// 		} else if (!settings.allowDetailedAnalytics && Ackee.detailedModeEnabled) {
	// 			Ackee.disableDetailedMode()
	// 		}
	// 	}
	// }, [settings])

	return {
		trackAction: Ackee.trackAction,
	}
}
