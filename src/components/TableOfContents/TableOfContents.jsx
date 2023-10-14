// Style imports
import styles from './TableOfContents.module.scss'





// Module imports
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import { Link } from '../Link/Link.jsx'





/**
 * Recursively converts tiers into JSX.
 *
 * @component
 */
function mapTier(tier) {
	const {
		children,
		id,
		title,
	} = tier

	return (
		<li key={id}>
			<Link href={`#${id}`}>{title}</Link>

			{Boolean(children?.length) && (
				<ol>
					{children.map(mapTier)}
				</ol>
			)}
		</li>
	)
}

/**
 * Renders a hierarchical table of contents for a page's content.
 *
 * @component
 */
export function TableOfContents(props) {
	const { structure } = props

	const mappedStructure = useMemo(() => {
		return (
			<ol>
				{structure.map(mapTier)}
			</ol>
		)
	}, [structure])

	return (
		<aside className={styles['table-of-contents']}>
			<h3>{'Table of Contents'}</h3>

			{mappedStructure}
		</aside>
	)
}

TableOfContents.propTypes = {
	structure: PropTypes.array.isRequired,
}
