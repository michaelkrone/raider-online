import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';

import { Raider } from './services/raider';

@Component({
  selector: 'app',
  directives: [ ROUTER_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MdButton ],
	styleUrls: ['./app.css'],
	pipes: [],
  providers: [ Raider ],
  templateUrl: './app.html',
})

export class App implements OnInit {
	public version: string;

  constructor(private raider: Raider) {}

	ngOnInit() {
		this.raider.getVersion()
			.subscribe(v => this.version = `v${v}`);
	}

}
