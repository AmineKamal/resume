import { Component, OnInit } from '@angular/core';
import { ConfigModel, Project } from 'src/app/config/config.model';
import { Config } from 'src/app/config/config';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  config: ConfigModel = Config.get().value;

  active = ['All'];
  filtered: Project[] = this.config.projects.list;

  constructor() {}

  ngOnInit(): void {
    Config.get().subscribe((c) => (this.config = c));
  }

  filter(tag: string) {
    if (tag === 'All') {
      return this.filterAll();
    }

    if (this.active.includes('All')) {
      this.active = [];
    }

    if (this.active.includes(tag)) {
      this.active = this.active.filter((t) => t !== tag);

      if (this.active.length === 0) {
        return this.filterAll();
      }
    } else {
      this.active.push(tag);
    }

    this.filtered = this.config.projects.list.filter((p) =>
      this.active.every((t) => p.tags.includes(t))
    );
  }

  playDemo(demo?: string) {
    if (!demo) {
      return alert(this.config.alerts.demo);
    }
    window.open(demo, '_blank').focus();
  }

  private filterAll() {
    this.active = ['All'];
    this.filtered = this.config.projects.list;
  }
}
