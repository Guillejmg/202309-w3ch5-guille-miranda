import {Component} from './component';
import '../style.css';
export class Header extends Component {
	constructor(selector: string) {
		super(selector);
		this.template = this.createTemplate();
		this.render();
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	manageComponent() {}

	render() {
		super.render();
	}

	createTemplate() {
		return `
    <header class="main-header">
      <h1 class="main-title">WELCOME TO POKEDEX!</h1>
    </header>
    `;
	}
}
