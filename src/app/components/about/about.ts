import {Component} from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';

@Component({
  selector: 'about',
  pipes: [],
  providers: [],
  directives: [MD_CARD_DIRECTIVES, MdButton],
  styleUrls: ['./about.css'],
  templateUrl: './about.html'
})

export class About {

  constructor() {
  }
}
