// Style imports
import styles from './Content.module.scss'





// Module imports
import PropTypes from 'prop-types'





/**
 * Renders flow content, such as a blog post.
 *
 * @component
 */
export function Content(props) {
	const { children } = props

	return (
		<div className={styles.content}>
			{children}
		</div>
	)
}

Content.defaultProps = {
	children: null,
}

Content.propTypes = {
	children: PropTypes.node,
}
