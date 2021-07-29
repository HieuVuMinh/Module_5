import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {findLast} from "@angular/compiler/src/directive_resolver";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() showArticleCreate = new EventEmitter<boolean>();
  isShowArticleForm = false;
  constructor() { }

  ngOnInit() {
  }

  showArticleForm() {
    this.isShowArticleForm = !this.isShowArticleForm;
    this.showArticleCreate.emit(this.isShowArticleForm);
  }
}
