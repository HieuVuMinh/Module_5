import {Component, OnInit} from '@angular/core';
import {Calculator} from '../calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  calculator: Calculator = {};

  constructor() {
  }

  getResult() {
    switch (this.calculator.operator) {
      case '+': {
        this.calculator.result = this.calculator.numberA + this.calculator.numberB;
        break;
      }
      case '-': {
        this.calculator.result = this.calculator.numberA - this.calculator.numberB;
        break;
      }
      case '*': {
        this.calculator.result = this.calculator.numberA * this.calculator.numberB;
        break;
      }
      case '/': {
        this.calculator.result = this.calculator.numberA / this.calculator.numberB;
        break;
      }
    }
  }


  ngOnInit() {
  }

}
