import HTMLHead from '../components/layout/Head';
import Layout from '../components/layout/Layout';
import Intro from '../components/Intro';
import Content from '../components/Content';

export default function Index() {
	return (
		<>
			<HTMLHead metaTitle="Homepage title" metaDescription="Testing SSR with Next.js" />
			<Layout>
				<Intro title="Homepage title" desc="Testing SSR with Next.js"/>
				<Content>
					Homepage
				</Content>
			</Layout>
		</>
	)
}
