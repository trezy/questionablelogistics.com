// Style imports
import styles from './Button.module.scss'





// Module imports
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





/**
 * Renders a button.
 *
 * @param {object} props All props.
 * @param {import('react').ReactNode} [props.children] The contents of the component.
 * @param {string} [props.className] Additional classes to be applied to the component.
 * @param {boolean} props.isSubmit Whether or not this should be a submit button.
 * @param {function} props.onClick The function to be executed when this button is clicked.
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
