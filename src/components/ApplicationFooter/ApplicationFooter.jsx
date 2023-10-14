// Style imports
import styles from './ApplicationFooter.module.scss'





// Module imports
import Image from 'next/image.js'





// Local imports
import { LinkList } from './LinkList.jsx'





// Constants
const LEGAL_LINKS = [
	{
		title: 'Code of Conduct',
		url: '/code-of-conduct',
	},
	{
		title: 'Terms of Service',
		url: '/terms-of-service',
	},
	{
		title: 'Privacy Policy',
		url: '/privacy-policy',
	},
	{
		title: 'Cookie Policy',
		url: '/cookie-policy',
	},
	{
		title: 'Acceptable Use Policy',
		url: '/acceptable-use-policy',
	},
]
const RESOURCE_LINKS = [
	{
		title: 'Roberts Space Industries',
		url: 'https://robertsspaceindustries.com',
	},
	{
		title: 'Star Citizen Wiki',
		url: 'https://starcitizen.tools',
	},
	{
		title: 'Erkul Ship Builder',
		url: 'https://erkul.games',
	},
	{
		title: 'Fleetyards.net',
		url: 'https://fleetyards.net',
	},
]
const SOCIAL_LINKS = [
	{
		title: 'Twitter',
		url: '/twitter',
	},
	{
		title: 'Youtube',
		url: '/youtube',
	},
	{
		title: 'Twitch',
		url: '/twitch',
	},
	{
		title: 'Discord',
		url: '/discord',
	},
]





/**
 * Renders the main website footer.
 */
export function ApplicationFooter() {
	return (
		<footer
			className={styles.footer}
			role={'contentinfo'}>
			<div className={styles['link-sections']}>
				<LinkList
					links={SOCIAL_LINKS}
					title={'Social'} />

				<LinkList
					links={RESOURCE_LINKS}
					title={'Resources'} />

				<LinkList
					links={LEGAL_LINKS}
					title={'Legal'} />
			</div>

			<Image
				height={100}
				src={'/images/brands/star-citizen-community/logo.png'}
				width={100} />

			<small>
				{'This is an unofficial Star Citizen Fan Site. Star Citizen®, Roberts Space Industries® and Cloud Imperium ® are registered trademarks of Cloud Imperium Rights LLC.'}
			</small>
		</footer>
	)
}
