// Style imports
import styles from './BackgroundCarousel.module.scss'





// Module imports
import {
	AnimatePresence,
	motion,
} from 'framer-motion'
import {
	useCallback,
	useEffect,
	useState,
} from 'react'
import Image from 'next/image.js'





// Constants
const MOTION_CONFIGS = {
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	initial: { opacity: 1 },
	transition: { duration: 1 },
}
const IMAGE_COUNT = 24
const IMAGE_SWAP_MILLISECONDS = 10000





/**
 * Fullscreen image carousel that automatically cycles through pictures.
 */
export function BackgroundCarousel() {
	const [currentImageIndex, setCurrentImageIndex] = useState(1)

	const updateImageIndex = useCallback(() => {
		setCurrentImageIndex(currentValue => {
			if (currentValue >= IMAGE_COUNT) {
				return 1
			}

			return currentValue + 1
		})
	}, [setCurrentImageIndex])

	useEffect(() => {
		const intervalID = setInterval(updateImageIndex, IMAGE_SWAP_MILLISECONDS)
		return () => clearInterval(intervalID)
	}, [updateImageIndex])

	return (
		<div className={styles['carousel-wrapper']}>
			<AnimatePresence>
				<motion.div
					key={currentImageIndex}
					animate={MOTION_CONFIGS.animate}
					className={styles['image-wrapper']}
					exit={MOTION_CONFIGS.exit}
					initial={MOTION_CONFIGS.initial}
					transition={MOTION_CONFIGS.transition}>
					<Image
						layout={'fill'}
						objectFit={'cover'}
						src={`/backgrounds/${String(currentImageIndex).padStart(2, '0')}.jpg`} />
				</motion.div>
			</AnimatePresence>
		</div>
	)
}
