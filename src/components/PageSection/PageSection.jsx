// Style imports
import styles from './PageSection.module.scss'





// Module imports
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





/**
 * Renders a page section.
 *
 * @component
 */
export function PageSection(props) {
	const {
		children,
		className,
		id,
	} = props

	const compiledClassName = useMemo(() => {
		return classNames(styles['page-section'], className)
	}, [className])

	return (
		<section
			className={compiledClassName}
			id={id}>
			{children}
		</section>
	)
}

PageSection.defaultProps = {
	children: null,
	className: '',
	id: '',
}

PageSection.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	id: PropTypes.string,
}
