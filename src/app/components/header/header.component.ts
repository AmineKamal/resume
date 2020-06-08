import { Component, OnInit } from '@angular/core';
import { ConfigModel } from 'src/app/config/config.model';
import { Config } from 'src/app/config/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  config: ConfigModel = Config.get().value;

  constructor() {}

  ngOnInit(): void {
    Config.get().subscribe((c) => (this.config = c));
  }

  toggleLang() {
    Config.toggle();
  }

  get cv() {
    return 'cv_' + Config.current() + '.pdf';
  }
}
