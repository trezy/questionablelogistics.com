// Module imports
import PropTypes from 'prop-types'





/**
 * Renders a link to another domain.
 *
 * @param {object} props All props.
 * @param {import('react').ReactNode} props.children The contents of the component.
 * @param {string} props.rel The relationship of the linked domain.
 */
export function ExternalLink(props) {
	const {
		children,
		rel,
	} = props

	return (
		<a
			{...props}
			rel={`noopener noreferrer ${rel}`}
			target={'_blank'}>
			{children}
		</a>
	)
}

ExternalLink.defaultProps = {
	rel: '',
}

ExternalLink.propTypes = {
	children: PropTypes.node.isRequired,
	rel: PropTypes.string,
}
