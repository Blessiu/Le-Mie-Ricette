import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
  lingua: string;
  constructor() {
    this.lingua = "italiano";
  }

  ngOnInit() {
  }
  selectLanguage(){
    console.log('Language: ' + this.lingua);
  }

}
