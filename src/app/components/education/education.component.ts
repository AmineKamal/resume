import { Component, OnInit } from '@angular/core';
import { ConfigModel } from 'src/app/config/config.model';
import { Config } from 'src/app/config/config';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  config: ConfigModel = Config.get().value;

  constructor() {}

  ngOnInit(): void {
    Config.get().subscribe((c) => (this.config = c));
  }
}
