// Style imports
import styles from './Header.module.scss'





// Module imports
import PropTypes from 'prop-types'





/**
 * Renders a section header.
 *
 * @component
 */
export function Header(props) {
	const { children } = props

	return (
		<header className={styles['header']}>
			{children}
		</header>
	)
}

Header.defaultProps = {
	children: null,
}

Header.propTypes = {
	children: PropTypes.node,
}
