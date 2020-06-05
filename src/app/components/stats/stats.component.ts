import { Component, OnInit } from '@angular/core';
import { ConfigModel } from 'src/app/config/config.model';
import { Config } from 'src/app/config/config';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  config: ConfigModel = Config.get().value;

  constructor() {}

  ngOnInit(): void {
    Config.get().subscribe((c) => (this.config = c));
  }

  tcolor(i: number) {
    const c =
      (i + 1) % 3 === 0 ? '#a0d034' : (i + 1) % 2 === 0 ? '#2980b9' : '#f1703a';

    return `background: ${c};`;
  }

  bcolor(i: number) {
    const c =
      (i + 1) % 3 === 0 ? '#b2ec2f' : (i + 1) % 2 === 0 ? '#3498db' : '#f88c5e';

    return `background: ${c};`;
  }
}
