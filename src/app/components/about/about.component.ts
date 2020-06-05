import { Component, OnInit } from '@angular/core';
import { ConfigModel } from 'src/app/config/config.model';
import { Config } from 'src/app/config/config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  config: ConfigModel = Config.get().value;

  constructor() {}

  ngOnInit(): void {
    Config.get().subscribe((c) => (this.config = c));
  }
}
