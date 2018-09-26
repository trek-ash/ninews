import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';
import { SourceService } from '../source.service';
@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {
  private apiUrl = 'https://newsapi.org/v2/sources?language=en&sortBy=popularity&apiKey=3b4e2f2d6d20449fb47da497f2729363';
  data: any = {};
  constructor(private http: Http, private Source: SourceService) {
    this.getData();
    this.getSource();
  }
  getData() {
    return this.http.get(this.apiUrl)
      .pipe(map((res: Response) => res.json()));
  }
  getSource() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  sourcenews(sourceclicked) {
  this.Source.source = sourceclicked;
  console.log(sourceclicked);
  console.log(this.Source.source);
  }
  ngOnInit() {
  }

}
