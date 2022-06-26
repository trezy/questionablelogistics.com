// Style imports
import styles from './Banner.module.scss'





// Module imports
import classnames from 'classnames'
import Image from 'next/image.js'
import Link from 'next/link.js'
import { useMemo } from 'react'
import { useRouter } from 'next/router.js'





// Constants
const LINKS = [
	{
		path: '/',
		title: 'Home',
	},
	{
		path: '/track',
		title: 'Track',
	},
	{
		path: '/about',
		title: 'About',
	},
]





/**
 * The main site banner.
 */
export function Banner() {
	const Router = useRouter()

	const mappedLinks = useMemo(() => {
		return LINKS.map((link, index) => {
			const compiledClassName = classnames({
				[styles['is-active']]: Router.asPath === link.path,
			})

			console.log({
				compiledClassName,
				'Router.asPath': Router.asPath,
				'link.path': link.path,
			})

			return (
				<Link
					key={index}
					href={link.path}>
					<a
						className={compiledClassName}
						href={link.path}>
						{link.title}
					</a>
				</Link>
			)
		})
	}, [Router.asPath])

	return (
		<header
			className={styles.banner}
			role={'banner'}>
			<h1>
				<Image
					alt={'Questionable Logistics Consolidated Logo'}
					height={100}
					src={'https://placehold.co/250x100?text=Logo'}
					width={250} />
			</h1>

			<nav>
				{mappedLinks}
			</nav>
		</header>
	)
}
