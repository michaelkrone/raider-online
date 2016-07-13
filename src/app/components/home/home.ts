import {Component} from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

import {SprintName} from '../sprint-name';

@Component({
  selector: 'home',
  directives: [ MD_CARD_DIRECTIVES, SprintName ],
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})

export class Home {
	public name: string;

	constructor() {}
}
