import {type Poke} from '../models/pokemons';
import {Component} from './component';

export class List extends Component {
	cards: Poke[];
	constructor(selector: string, cards: Poke[]) {
		super(selector);
		this.cards = cards;
		this.template = this.createTemplate();
		this.render();
	}

	render() {
		super.render();
		// Const cards = new Card()
	}

	createTemplate() {
		return `
    <div class="list-container">
    <ul class="Pokelist">
    </ul>
    </div>`;
	}
}
