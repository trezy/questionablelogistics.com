// Local imports
import { Content } from '../Content/Content.jsx'
import { Header } from '../Header/Header.jsx'
import { PageSection } from '../PageSection/PageSection.jsx'





/**
 * The about page.
 */
export function AboutPage() {
	return (
		<>
			<PageSection>
				<Content>
					<Header>
						<h3>{'Who Are We'}</h3>
					</Header>

					<p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut dui ac diam sodales commodo. Praesent vitae sollicitudin leo. Pellentesque facilisis metus in velit suscipit lacinia id eget odio. Donec ultrices interdum eros quis tempor. Pellentesque vel ante metus. Etiam pharetra ac leo ac rhoncus. Duis hendrerit ipsum ac lectus suscipit aliquet. Sed pharetra orci metus.'}</p>
				</Content>
			</PageSection>

			<PageSection>
				<Content>
					<Header>
						<h3>{'Our Process'}</h3>
					</Header>

					<p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut dui ac diam sodales commodo. Praesent vitae sollicitudin leo. Pellentesque facilisis metus in velit suscipit lacinia id eget odio. Donec ultrices interdum eros quis tempor. Pellentesque vel ante metus. Etiam pharetra ac leo ac rhoncus. Duis hendrerit ipsum ac lectus suscipit aliquet. Sed pharetra orci metus.'}</p>
				</Content>
			</PageSection>

			<PageSection>
				<Content>
					<Header>
						<h3>{'The Team'}</h3>
					</Header>

					<p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut dui ac diam sodales commodo. Praesent vitae sollicitudin leo. Pellentesque facilisis metus in velit suscipit lacinia id eget odio. Donec ultrices interdum eros quis tempor. Pellentesque vel ante metus. Etiam pharetra ac leo ac rhoncus. Duis hendrerit ipsum ac lectus suscipit aliquet. Sed pharetra orci metus.'}</p>
				</Content>
			</PageSection>

			<PageSection>
				<Content>
					<Header>
						<h3>{'Our Mission'}</h3>
					</Header>

					<p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut dui ac diam sodales commodo. Praesent vitae sollicitudin leo. Pellentesque facilisis metus in velit suscipit lacinia id eget odio. Donec ultrices interdum eros quis tempor. Pellentesque vel ante metus. Etiam pharetra ac leo ac rhoncus. Duis hendrerit ipsum ac lectus suscipit aliquet. Sed pharetra orci metus.'}</p>
				</Content>
			</PageSection>
		</>
	)
}

AboutPage.title = 'About'
