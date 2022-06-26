// Style imports
import styles from './PageWrapper.module.scss'





// Module imports
import PropTypes from 'prop-types'





// Local imports
import { ApplicationFooter } from '../ApplicationFooter/ApplicationFooter.jsx'





/**
 *
 * @param {object} props All props.
 * @param {import('react').ReactNode} props.children The contents of the component.
 */
export function PageWrapper(props) {
	const { children } = props

	return (
		<div className={styles['page-wrapper']}>
			<main>
				{children}
			</main>

			<ApplicationFooter />
		</div>
	)
}

PageWrapper.defaultProps = {
	children: null,
}

PageWrapper.propTypes = {
	children: PropTypes.node,
}
