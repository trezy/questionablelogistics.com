// Style imports
import styles from './PageWrapper.module.scss'





// Module imports
import classnames from 'classnames'
import PropTypes from 'prop-types'





// Local imports
import { ApplicationFooter } from '../ApplicationFooter/ApplicationFooter.jsx'
import { TableOfContents } from '../TableOfContents/TableOfContents.jsx'





/**
 * Wraps page content.
 *
 * @param {object} props All props.
 * @param {import('react').ReactNode} props.children The contents of the component.
 * @param {object} [props.structure] The structure of the page contents.
 */
export function PageWrapper(props) {
	const {
		children,
		structure,
		title,
	} = props

	const mainClassName = classnames({
		[styles['no-table-of-contents']]: !structure,
	})

	return (
		<div className={styles['page-wrapper']}>
			<main className={mainClassName}>
				<h2 className={styles['page-title']}>{title}</h2>

				{Boolean(structure) && (
					<TableOfContents structure={structure} />
				)}

				{children}
			</main>


			<ApplicationFooter />
		</div>
	)
}

PageWrapper.defaultProps = {
	children: null,
	structure: null,
}

PageWrapper.propTypes = {
	children: PropTypes.node,
	structure: PropTypes.object,
	title: PropTypes.string.isRequired,
}
