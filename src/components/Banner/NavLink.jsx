// Style imports
import styles from './NavLink.module.scss'





// Module imports
import {
	AnimatePresence,
	motion,
} from 'framer-motion'
import {
	useCallback,
	useMemo,
	useState,
} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router.js'





// Local imports
import { Button } from '../Button/Button.jsx'
import { Link } from '../Link/Link.jsx'
import { mapLink } from './mapLink.jsx'





// Constants
const SUBNAV_WRAPPER_VARIANTS = {
	open: {
		height: 'auto',
	},
	collapsed: {
		height: 0,
		transition: {
			delay: 0.2,
			duration: 0.3,
    },
	},
}





/**
 * Renders a link, as well as it's sub links if there are any.
 *
 * @component
 */
export function NavLink(props) {
	const {
		children,
		links,
		path,
	} = props

	const Router = useRouter()

	const [isOpen, setIsOpen] = useState(false)

	const handleSubnavToggle = useCallback(() => {
		setIsOpen(previousState => !previousState)
	}, [setIsOpen])

	const compiledClassName = useMemo(() => {
		return classnames(styles['nav-link'], {
			[styles['is-active']]: Router.asPath === path,
		})
	}, [
		path,
		Router.asPath,
	])

	const renderedLink = (
		<Link
			className={compiledClassName}
			href={path}>
			{children}
		</Link>
	)

	if (links) {
		return (
			<div
				className={styles['subnav']}
				data-is-open={isOpen}>
				<div className={styles['subnav-controls']}>
					{renderedLink}

					<Button onClick={handleSubnavToggle} />
				</div>

				<motion.div
					key={'subnav-content'}
					animate={isOpen ? 'open' : 'collapsed'}
					className={styles['subnav-content']}
					exit={'collapsed'}
					initial={'collapsed'}
					variants={SUBNAV_WRAPPER_VARIANTS}>
					<AnimatePresence exitBeforeEnter>
						{isOpen && links.map((link, index, array) => {
							return (
								<motion.div
									key={index}
									// eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
									exit={{
										opacity: 0,
										x: '-100%',
										transition: {
											delay: (array.length - index) * 0.1,
										},
									}}>
									{mapLink(link, index)}
								</motion.div>
							)
						})}
					</AnimatePresence>
				</motion.div>
			</div>
		)
	}

	return renderedLink
}

NavLink.defaultProps = {
	links: null,
}

NavLink.propTypes = {
	children: PropTypes.node.isRequired,
	links: PropTypes.arrayOf(PropTypes.shape({
		children: PropTypes.node.isRequired,
		path: PropTypes.string.isRequired,
		links: PropTypes.array,
	})),
	path: PropTypes.string.isRequired,
}
