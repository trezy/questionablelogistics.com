// Style imports
import styles from './Link.module.scss'





// Module imports
import NextLink from 'next/link.js'
import PropTypes from 'prop-types'





// Local imports
import { ExternalLink } from '../ExternalLink.jsx'





/**
 * Handles ambiguous links, wrapping them with whichever component is most appropriate.
 *
 * @param {object} props All props.
 * @param {import('react').ReactNode} props.children
 * @param {string} props.href The URL to which this link leads.
 */
export function Link(props) {
	const {
		children,
		href,
	} = props

	if (/^(?:https?:)?\/\//u.test(href)) {
		return (
			<ExternalLink
				className={styles.link}
				href={href}>
				{children}
			</ExternalLink>
		)
	}

	return (
		<NextLink href={href}>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a className={styles.link}>
				{children}
			</a>
		</NextLink>
	)
}

Link.defaultProps = {
	children: null,
}

Link.propTypes = {
	children: PropTypes.node,
	href: PropTypes.string.isRequired,
}
