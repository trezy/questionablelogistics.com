// Local imports
import { NavLink } from './NavLink.jsx'





/**
 * @typedef Link
 * @property {string} children The contents of the link.
 * @property {Link[]} [links] The path to which this link should lead.
 * @property {string} path The path to which this link should lead.
 */
/**
 * Renders a nav link.
 *
 * @param {Link} link Configuration for the link.
 * @param {number} index The position of this link in its parent array.
 */
export function mapLink(link, index) {
	return (
		<NavLink
			key={index}
			{...link} />
	)
}
