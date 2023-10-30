import {type Poke} from '../models/pokemons';
export class ApiRepo {
	apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

	async getPokemons(): Promise<Poke[]> {
		const response = await fetch(this.apiUrl);
		if (!response.ok) {
			throw new Error(response.status + ' ' + response.statusText);
		}

		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return response.json();
	}
}
