import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-calcolatrice',
  templateUrl: './calcolatrice.page.html',
  styleUrls: ['./calcolatrice.page.scss'],
})
export class CalcolatricePage implements OnInit {

  result = "";

	constructor() { }

	ngOnInit() {
	}

	btnClicked(btn) {
		if (btn == "C") {
			this.result = "";
		} else if (btn == "=") {
			this.result = eval(this.result);
		} else if (btn == "squareroot") {
			this.result = Math.sqrt(eval(this.result)) + "";
		} else if (btn == "square") {
			this.result = eval("(" + this.result + ") * ( " + this.result + ")");
		} else if (btn == "reciproc") {
			this.result = eval(1 + "/ (" + this.result + ")");
		} else {
			this.result += btn;
		}
	}

}
