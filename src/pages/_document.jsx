// Module imports
import {
	Head as NextHead,
	Html as NextHTML,
	Main as NextMain,
	NextScript,
} from 'next/document'





// Local imports
import { compileArrays } from '../helpers/compileArrays.js'





// Constants
const GOOGLE_FONTS_CONFIG = {
	'Roboto': {
		ital: [0, 1],
		wght: [400, 700],
	},
	'Roboto Mono': {
		ital: [0, 1],
		wght: [100, 400, 700],
	},
}
const GOOGLE_FONTS_STRING = Object
	.entries(GOOGLE_FONTS_CONFIG)
	.reduce((accumulatorURL, [name, styles], index) => {
		if (index === 0) {
			accumulatorURL.searchParams.append('display', 'optional')
		}

		const familyStyleKeys = Object.keys(styles)
		const familyStylesValues = compileArrays(styles)

		accumulatorURL.searchParams.append('family', `${name}:${familyStyleKeys}@${familyStylesValues}`)

		return accumulatorURL
	}, new URL('css2', 'https://fonts.googleapis.com'))
	.toString()





/**
 * Customises the root HTML shell.
 */
export default function Document() {
	return (
		<NextHTML>
			<NextHead>
				<link
					href={GOOGLE_FONTS_STRING}
					rel={'stylesheet'} />
			</NextHead>

			<body>
				<NextMain />
				<NextScript />
			</body>
		</NextHTML>
	)
}
