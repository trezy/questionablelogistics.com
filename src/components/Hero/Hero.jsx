// Style imports
import styles from './Hero.module.scss'





// Module imports
import classnames from 'classnames'
import PropTypes from 'prop-types'





// Local imports
import { PageSection } from '../PageSection/PageSection.jsx'
import { useMemo } from 'react'





/**
 * Renders a large hero section.
 *
 * @component
 */
export function Hero(props) {
	const {
		children,
		className,
	} = props

	const compiledClassName = useMemo(() => {
		return classnames(styles.hero, className)
	}, [className])

	return (
		<PageSection className={compiledClassName}>
			{children}
		</PageSection>
	)
}

Hero.defaultProps = {
	children: null,
	className: '',
}

Hero.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
}
