import {Component, Output, EventEmitter} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/forms';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';
import {MD_RADIO_DIRECTIVES} from '@angular2-material/radio';
import {MdUniqueSelectionDispatcher} from '@angular2-material/core';

import {Raider} from '../../services/raider';
import {Options} from '../../services/raider';
import {Mood} from '../../services/raider';
import {AdverbParam} from '../../services/raider';

@Component({
  selector: 'sprint-name',
  providers: [Raider, MdUniqueSelectionDispatcher],
  directives: [MD_CARD_DIRECTIVES, FORM_DIRECTIVES, MD_RADIO_DIRECTIVES, MdInput, MdButton, MdCheckbox],
  templateUrl: './sprint-name.html',
  styleUrls: ['./sprint-name.css']
})

export class SprintName {
	@Output('get') emitter = new EventEmitter();

	public params: Options;

	constructor(private raider: Raider) {
		this.params = {char: '', mood: 'realistic', adverb: AdverbParam.Off};
	}

	getSprintName() {
		return this.raider.getSprintName(this.params)
			.subscribe(
				name => this.emitter.emit(name),
				e => this.emitter.emit(`Invalid character "${this.params.char}"`)
			);
	}

	get adverb() {
		return this.params.adverb === AdverbParam.On;
	}

	set adverb(b) {
		this.params.adverb = b ? AdverbParam.On : AdverbParam.Off;
	}
}
