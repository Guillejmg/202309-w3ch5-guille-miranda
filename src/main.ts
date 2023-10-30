import './style.css';
import {Header} from './components/header';
import {Footer} from './components/footer';

function main() {
	const components = [
		new Header('.container'),
		new Footer('.container'),
	];

	console.log(components);
}

main();
