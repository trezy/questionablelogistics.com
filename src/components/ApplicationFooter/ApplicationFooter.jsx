// Style imports
import styles from './ApplicationFooter.module.scss'





// Module imports
import Image from 'next/image.js'





/**
 *
 */
export function ApplicationFooter() {
	return (
		<footer className={styles.footer}>
			<div>
				{'Application Footer'}
			</div>

			<Image
				height={100}
				src={'/images/StarCitizenCommunity.png'}
				width={100} />
		</footer>
	)
}
