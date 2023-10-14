// Style imports
import styles from './Link.module.scss'





// Module imports
import classnames from 'classnames'
import NextLink from 'next/link.js'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import { ExternalLink } from '../ExternalLink.jsx'





/**
 * Handles ambiguous links, wrapping them with whichever component is most appropriate.
 *
 * @component
 */
export function Link(props) {
	const {
		children,
		className,
		href,
	} = props

	const compiledClassName = useMemo(() => {
		return classnames(className, styles['link'])
	}, [className])

	if (/^(?:(?:https?:)|\/\/)/u.test(href)) {
		return (
			<ExternalLink
				className={compiledClassName}
				href={href}>
				{children}
			</ExternalLink>
		)
	}

	return (
		<NextLink
			className={compiledClassName}
			href={href}>
			{children}
		</NextLink>
	)
}

Link.defaultProps = {
	children: null,
	className: '',
}

Link.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	href: PropTypes.string.isRequired,
}
