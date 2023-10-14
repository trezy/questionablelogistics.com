// Style imports
import styles from './Button.module.scss'





// Module imports
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





/**
 * Renders a button.
 *
 * @component
 */
export function Button(props) {
	const {
		children,
		className,
		isSubmit,
		onClick,
	} = props

	const compiledClassName = useMemo(() => {
		return classnames(styles['button'], className)
	}, [className])

	return (
		// eslint-disable-next-line react/forbid-elements
		<button
			className={compiledClassName}
			onClick={onClick}
			type={isSubmit ? 'submit' : 'button'}>
			{children}
		</button>
	)
}

Button.defaultProps = {
	children: null,
	className: '',
	isSubmit: false,
	onClick: null,
}

Button.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	isSubmit: PropTypes.bool,
	onClick: PropTypes.func,
}
