import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/config/config';
import { ConfigModel } from 'src/app/config/config.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  config: ConfigModel = Config.get().value;

  constructor() {}

  ngOnInit(): void {
    Config.get().subscribe((c) => (this.config = c));
  }
}
