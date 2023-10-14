// Style imports
import styles from './PageWrapper.module.scss'





// Module imports
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import { ApplicationFooter } from '../ApplicationFooter/ApplicationFooter.jsx'
import { TableOfContents } from '../TableOfContents/TableOfContents.jsx'





/**
 * Wraps page content.
 *
 * @component
 */
export function PageWrapper(props) {
	const {
		children,
		showPageTitle,
		structure,
		title,
	} = props

	const wrapperClassName = useMemo(() => {
		return classnames(styles['page-wrapper'], {
			[styles['no-page-title']]: !showPageTitle,
			[styles['no-table-of-contents']]: !structure,
		})
	}, [
		showPageTitle,
		structure,
	])

	return (
		<div className={wrapperClassName}>
			{showPageTitle && (
				<h2 className={styles['page-title']}>{title}</h2>
			)}

			<div className={styles['middle-wrapper']}>
				{Boolean(structure) && (
					<TableOfContents structure={structure} />
				)}

				<main>
					{children}
				</main>
			</div>

			<ApplicationFooter />
		</div>
	)
}

PageWrapper.defaultProps = {
	children: null,
	showPageTitle: true,
	structure: null,
}

PageWrapper.propTypes = {
	children: PropTypes.node,
	showPageTitle: PropTypes.bool,
	structure: PropTypes.array,
	title: PropTypes.string.isRequired,
}
