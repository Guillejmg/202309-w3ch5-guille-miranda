import {Component} from './component';
import '../style.css';
export class Footer extends Component {
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
    <footer class="main-footer">
      <p class="main-footer">GET ALL!</p>
    </footer>
    `;
	}
}
