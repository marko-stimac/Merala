import Header from './Header';
import Footer from './Footer';
import { PageTransition } from 'next-page-transitions';

/* import "bootstrap/scss/bootstrap.scss"; */

export default function Layout(props) {
	return (
		<div>
			<Header />
				{/* <PageTransition timeout={300} classNames="page-transition"> */}
				<main>{props.children}</main>
				{/*</PageTransition>*/}
			<Footer />
			<style jsx>{`
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
			}
          `}</style>
		</div>
	);
}
