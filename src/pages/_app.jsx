/* eslint-env node */
// Style imports
import '../scss/reset.scss'
import '../scss/lib.scss'
import '../scss/app.scss'





// Module imports
import { AnimatePresence } from 'framer-motion'
import { ColorModeContextProvider } from 'react-color-mode'
import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core'
import { Provider as LyketProvider } from '@lyket/react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'





// Local imports
import { BackgroundCarousel } from '../components/BackgroundCarousel/BackgroundCarousel.jsx'
import { Banner } from '../components/Banner/Banner.jsx'
import { PageWrapper } from '../components/PageWrapper/PageWrapper.jsx'
import { reportWebVitals } from '../helpers/reportWebVitals.js'
import { useNProgress } from '../hooks/useNProgress.js'





fontAwesomeConfig.autoAddCss = false

/**
 * Scrolls to the top of the page if possible.
 */
function handleExitComplete() {
	if (typeof window !== 'undefined') {
		window.scrollTo({ top: 0 })
	}
}

// eslint-disable-next-line jsdoc/require-jsdoc
export default function App(props) {
	const {
		Component,
		pageProps,
	} = props
	const router = useRouter()

	useNProgress()

	return (
		<>
			<BackgroundCarousel />

			<LyketProvider apiKey={process.env.NEXT_PUBLIC_LYKET_API_KEY}>
				<ColorModeContextProvider>
					<Banner />

					<AnimatePresence
						exitBeforeEnter
						onExitComplete={handleExitComplete}>
						<PageWrapper
							showPageTitle={Component.showPageTitle}
							structure={Component.structure}
							title={Component.title}>
							<Component
								key={router.route}
								{...pageProps} />
						</PageWrapper>
					</AnimatePresence>
				</ColorModeContextProvider>
			</LyketProvider>
		</>
	)
}

App.defaultProps = {
	pageProps: {},
}

App.propTypes = {
	Component: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.node,
	]).isRequired,
	pageProps: PropTypes.object,
}

export { reportWebVitals }
