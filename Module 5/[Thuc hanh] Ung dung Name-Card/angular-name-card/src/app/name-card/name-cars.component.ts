import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-cars',
  templateUrl: './name-cars.component.html',
  styleUrls: ['./name-cars.component.scss']
})
export class NameCarsComponent implements OnInit {

  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;

  constructor() {
  }

  ngOnInit() {
  }

}
