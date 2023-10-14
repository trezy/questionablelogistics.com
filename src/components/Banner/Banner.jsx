// Style imports
import styles from './Banner.module.scss'





// Module imports
import Image from 'next/image.js'
import { mapLink } from './mapLink.jsx'





// Constants
const LINKS = [
	{
		children: 'Home',
		path: '/',
	},
	{
		children: 'About',
		path: '/about',
	},
]




/**
 * Renders the main site banner.
 */
export function Banner() {
	return (
		<header
			className={styles.banner}
			role={'banner'}>
			<h1 className={styles.brand}>
				<Image
					alt={'Questionable Logistics Consolidated Logo'}
					layout={'fill'}
					src={'/images/brands/questionable-logistics/logo.abbreviated.transparent.png'} />
			</h1>

			<nav>
				{LINKS.map(mapLink)}
			</nav>
		</header>
	)
}
