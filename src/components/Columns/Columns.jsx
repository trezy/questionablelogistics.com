// Style imports
import styles from './Columns.module.scss'





// Module imports
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





/**
 * Renders flow content, such as a blog post.
 *
 * @param {object} props All props.
 * @param {import('react').ReactNode} children
 */
export function Columns(props) {
	const { children } = props

	const compiledClassName = useMemo(() => {
		return classnames(styles['columns'])
	}, [])

	return (
		<div className={compiledClassName}>
			{children}
		</div>
	)
}

Columns.defaultProps = {
	children: null,
}

Columns.propTypes = {
	children: PropTypes.node,
}
