import {Component} from './component';

import '../style.css';
import {type Poke} from '../models/pokemons';

export class Card extends Component {
	pokemon: Poke;
	constructor(selector: string, pokemon: Poke) {
		super(selector);
		this.pokemon = {...pokemon};
		this.manageComponent();
	}

	manageComponent() {
		this.template = this.createTemplate();
		this.render();
	}

	render() {
		super.render();
	}

	createTemplate() {
		return `
    <li class="pokemon-card">
      <p><span>Name:</span> ${this.pokemon.name} </p>
      <p><span>Owner:</span> ${this.pokemon.url} </p>
    </li>
      `;
	}
}
