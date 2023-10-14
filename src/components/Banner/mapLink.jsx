// Local imports
import { NavLink } from './NavLink.jsx'





/**
 * Renders a nav link.
 *
 * @component
 */
export function mapLink(link, index) {
	return (
		<NavLink
			key={index}
			{...link} />
	)
}
