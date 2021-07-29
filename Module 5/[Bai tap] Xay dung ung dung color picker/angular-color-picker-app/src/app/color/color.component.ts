import {Component, OnInit} from '@angular/core';
import {HexColor} from '../hex-color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  hexColors: HexColor[] = [
    {name: 'Vàng', hex: '#F5DD04'},
    {name: 'Đỏ', hex: '#EB0F00'},
    {name: 'Xanh', hex: '#00DB45'},
    {name: 'Tím', hex: '#E80CE0'},
  ];

  hex: HexColor = {};

  choosenColor: string;

  constructor() {
  }


  getHex(nameColor) {
    this.choosenColor = nameColor;
  }

  ngOnInit() {
  }

}
