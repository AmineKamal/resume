import { Component, OnInit } from '@angular/core';
import { ConfigModel } from 'src/app/config/config.model';
import { Config } from 'src/app/config/config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  config: ConfigModel = Config.get().value;

  constructor() {}

  ngOnInit(): void {
    Config.get().subscribe((c) => (this.config = c));
  }
}
