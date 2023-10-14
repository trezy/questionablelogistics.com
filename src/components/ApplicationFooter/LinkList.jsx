// Module imports
import PropTypes from 'prop-types'
import { useMemo } from 'react'





// Local imports
import { Link } from '../Link/Link.jsx'





/**
 * Renders a list of links for the footer.
 *
 * @component
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
