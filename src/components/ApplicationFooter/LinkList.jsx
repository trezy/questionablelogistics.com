// Module imports
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import { Link } from '../Link/Link.jsx'





/**
 * @typedef LinkObject
 * @property {string} title Text to represent the link's destination.
 * @property {string} url The destination of this link.
 */

/**
 * Renders a list of links for the footer.
 *
 * @param {object} props All props
 * @param {LinkObject[]} props.links A list of links to be rendered.
 * @param {string} props.title Title to be rendered.
 */
 export function LinkList(props) {
	const {
		links,
		title,
	} = props

	const mappedLinks = useMemo(() => {
		return links.map((link, index) => {
			return (
				<Link
					key={index}
					href={link.url}>
					{link.title}
				</Link>
			)
		})
	}, [links])

	return (
		<section>
			<header>
				{title}
			</header>

			{mappedLinks}
		</section>
	)
}

LinkList.propTypes = {
	links: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	})).isRequired,
	title: PropTypes.string.isRequired,
}
