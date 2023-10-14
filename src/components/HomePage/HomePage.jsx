// Style imports
import styles from './HomePage.module.scss'





// Module imports
import Image from 'next/image.js'





// Local imports
import { Hero } from '../Hero/Hero.jsx'
import { PageSection } from '../PageSection/PageSection.jsx'





// Constants
const CLIENTS = [
	'Argo Astronautics',
	'Aegis Dynamics',
	'Drake Interplanetary',
	'Musashi Industrial and Starflight Concern',
	'Roberts Space Industries',
	'Tumbril',
	'Consolidated Outland',
	'Crusader Industries',
	'Anvil Aerospace',
	'Kruger Intergalactic',
]





/**
 * The home page.
 */
export function HomePage() {
	return (
		<>
			<Hero
				className={styles['intro-section']}
				isFullWidth>
				<header>
					<h2>
						<div>{'Questionable methods.'}</div>
						<div>{'Incontrovertible results.'}</div>
					</h2>

					<p>{'Our clients trust us to deliver exactly what they ask for... no questions asked. Join ranks with the most reputable organisations in the \'verse enjoying the '}<strong>{'Questionable Experience®'}</strong>{' and we\'ll get the job done - discretion included.'}</p>
				</header>

				<div className={styles['client-list']}>
					<h3>{'Our Clients'}</h3>

					<ul>
						{CLIENTS.map(client => {
							return (
								<li key={client}>
									<Image
										alt={`${client} Logo`}
										layout={'fill'}
										objectFit={'contain'}
										src={`/images/brands/${client.toLowerCase().replace(/\s/gu, '-')}/logo.white.png`} />
								</li>
							)
						})}
					</ul>
				</div>
			</Hero>

			<PageSection className={styles['questionable-logistics-definitions']}>
				<header>
					{'Definitions'}
				</header>

				<dl>
					<dt>{'Questionable'}</dt>
					<dd aria-label={'Pronunciation'}>
						<span><strong>{'kwes'}</strong>{'-chuh-nuh-buhl'}</span>
					</dd>

					<dd aria-label={'Definition'}>
						{'of doubtful propriety, honesty, morality, respectability, etc.'}
					</dd>

					<dt>{'Logistics'}</dt>

					<dd aria-label={'Pronunciation'}>
						<span>{'loh-'}<strong>{'jis'}</strong>{'-tiks'}</span>
					</dd>

					<dd aria-label={'Definition'}>
						{'the detailed organization and implementation of a complex operation'}
					</dd>
				</dl>
			</PageSection>
		</>
	)
}

HomePage.showPageTitle = false

HomePage.title = 'Home'
