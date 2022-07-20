// Local imports
import { Content } from '../components/Content/Content.jsx'
import { Link } from '../components/Link/Link.jsx'





/**
 * This page includes the complete Code of Conduct for the Questionable Logistics community.
 */
export default function CodeOfConductPage() {
	return (
		<Content>
			<h3 id={'our-pledge'}>
				{'Our Pledge'}
			</h3>

			<p>{'In the interest of fostering an open and welcoming environment, Questionable Logistics Consolidated (QLC) pledges to making participation in our community a harassment-free experience for everyone, regardless of gender, gender identity and expression, sexual identity or orientation, disability, mental illness, neuro(a)typicality, physical appearance, pregnancy status, veteran status, political affiliation, marital status, body size, age, race, national origin, ethnic origin, nationality, immigration status, language, religion or lack thereof, or other identity marker..'}</p>

			<h3 id={'community-standards'}>
				{'Community Standards'}
			</h3>

			<p>{'To maintain a safe and welcoming community for all, QLC expects everybody that engages in our community to abide by our community standards. Examples of behavior that contributes to creating a positive environment include:'}</p>

			<ul>
				<li>{'Using welcoming and inclusive language.'}</li>
				<li>{'Being respectful of differing viewpoints and experiences.'}</li>
				<li>{'Gracefully accepting constructive criticism.'}</li>
				<li>{'Focusing on what is best for the community.'}</li>
				<li>{'Showing empathy towards other community members.'}</li>
			</ul>

			<p>{'The list of infractions below '}<em>{'is not'}</em>{' exhaustive. Immediate decisions are up to the moderator handling the situation, and further alternative consequences may be deemed necessary by the organization\'s founders.'}</p>

			<h4 id={'minor-infractions'}>
				{'Minor Infractions'}
			</h4>

			<p>{'Engaging in any of the minor infractions outlined below will result in temporary suspension of access to our community.'}</p>

			<ul>
				<li>{'Excessive use of insulting language directed towards an individual or a group of people such that it constitutes identifiable hate.'}</li>
				<li>{'Excessive use of inappropriate language (harmless swearing is okay, foul targeted language is not).'}</li>
				<li>{'Excessive spamming or trolling.'}</li>
				<li>{'Religious debates.'}</li>
				<li>{'Unwelcome comments regarding a person\'s lifestyle choices and practices, including those related to food, health, parenting, relationships, drugs, and employment.'}</li>
				<li>{'Deliberate misgendering, inappropriate use or abuse of pronouns, calling someone by something other than what they are comfortable with.'}</li>
				<li>{'Gratuitous sexual imagery or behavior in spaces where they are not appropriate.'}</li>
				<li>{'Sowing insubordination or sedition.'}</li>
				<li>{'Publication of information shared in confidence.'}</li>
				<li>{'Frequent insubordination when asked to cease any specific behavior by a community moderator.'}</li>
			</ul>

			<h4 id={'major-infractions'}>
				{'Major Infractions'}
			</h4>

			<p>{'Engaging in any of the major infractions outlined below will result in immediate and permanent expulsion from our community.'}</p>

			<ul>
				<li>{'Racial / ethnic harassment.'}</li>
				<li>{'Sexual harassment.'}</li>
				<li>{'Real life violent threats or intimidation.'}</li>
				<li>{'Incitement of real world violence.'}</li>
				<li>{'Stalking online or physically.'}</li>
				<li>{'Encouraging any form of self harm in real life.'}</li>
				<li>{'Sustained harassment (heckling).'}</li>
				<li>{'Distribution of real-life personal information (doxxing).'}</li>
				<li>{'Posting cheats, hacks, trojan horses or malicious programs.'}</li>
				<li>{'Publication or external communication of classified organization information.'}</li>
			</ul>

			<h3 id={'harassment'}>
				{'Harassment'}
			</h3>

			<p>{'We do not tolerate harassment in any form.'}</p>

			<h4 id={'reporting'}>
				{'Reporting'}
			</h4>

			<p>{'If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact one of our moderators immediately (either via DM in Discord, or by sending an email with details of the issue to '}<Link href={'mailto:harassment@questionablelogistics.com'}>{'harassment@questionablelogistics.com'}</Link>{'). You do not need to be the target of harassment to speak up. Making this the best possible community is everyone\'s responsibility.'}</p>

			<p>{'If an incident is reported, our moderators will be happy to help participants contact the appropriate platform and/or local law enforcement, or otherwise assist those experiencing harassment to feel safe for until action is taken against the harasser.'}</p>

			<p>{'We will respect confidentiality requests for the purpose of protecting victims of abuse. At our discretion, we may publicly name a person about whom we\'ve received harassment complaints, or privately warn third parties about them, if we believe that doing so will increase the safety of our community or the general public. We will not name harassment victims without their affirmative consent.'}</p>

			<h4 id={'consequences'}>
				{'Consequences'}
			</h4>

			<p>{'Users asked to stop any harassing behavior are expected to comply immediately.'}</p>

			<p>{'If a user engages in harassing behavior, our community moderators may take any action they deem appropriate, up to and including expulsion from all facets of my community and identification of the user as a harasser to members of my community and/or the general public.'}</p>
		</Content>
	)
}

CodeOfConductPage.title = 'Code of Conduct'

CodeOfConductPage.structure = [
	{
		title: 'Our Pledge',
		id: 'our-pledge',
	},
	{
		title: 'Community Standards',
		id: 'community-standards',
		children: [
			{
				title: 'Minor Infractions',
				id: 'minor-infractions',
			},
			{
				title: 'Major Infractions',
				id: 'major-infractions',
			},
		],
	},
	{
		title: 'Harassment',
		id: 'harassment',
		children: [
			{
				title: 'Reporting',
				id: 'reporting',
			},
			{
				title: 'Consequences',
				id: 'consequences',
			},
		],
	},
]
