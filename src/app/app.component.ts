import {Component} from '@angular/core';
import {SourceService} from './source.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SourceService]
})
export class AppComponent {
  title = 'ninews';
  source: string;
  getthenews(SourceNews) {
    this.source = SourceNews;
  }
}
