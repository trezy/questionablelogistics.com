// Module imports
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { useRouter } from 'next/router'





// Local variables
let isConfigured = false





/**
 * Connect NProgress to the Next.js router.
 */
export function useNProgress() {
	const router = useRouter()

	useEffect(() => {
		if (!isConfigured) {
			isConfigured = true
			NProgress.configure({ showSpinner: false })
		}

		router.events.on('routeChangeStart', NProgress.start)
		router.events.on('routeChangeError', NProgress.done)
		router.events.on('routeChangeComplete', NProgress.done)

		return () => {
			router.events.off('routeChangeStart', NProgress.start)
			router.events.off('routeChangeError', NProgress.done)
			router.events.off('routeChangeComplete', NProgress.done)
		}
	}, [router.events])
}
