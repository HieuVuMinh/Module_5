import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Article} from "../article";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Output() articleEventEmitter = new EventEmitter<Article>();

  article: Article = {};
  constructor() { }

  ngOnInit() {
  }

  create() {
    this.articleEventEmitter.emit(this.article);
    this.article = {};
  }
}
