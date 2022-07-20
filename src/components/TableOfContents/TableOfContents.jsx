// Style imports
import styles from './TableOfContents.module.scss'





// Module imports
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import { Link } from '../Link/Link.jsx'





/**
 * @typedef TierObject
 * @property {TierObject[]} [children] An array of child tiers
 * @property {string} id The ID of the element on the page.
 * @property {string} title The title of the tier.
 */
/**
 * Recursively converts tiers into JSX.
 *
 * @param {TierObject} tier The current tier to be parsed and converted.
 * @returns {import('react').ReactNode} A JSX representation of the page structure.
 */
function mapTier(tier) {
	const {
		children,
		id,
		title,
	} = tier

	return (
		<li>
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
 * @param {object} props All props.
 * @param {object} props.structure The structure of the page.
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
	structure: PropTypes.object.isRequired,
}
