import { Component, OnInit } from '@angular/core';
import {SourceService} from '../source.service';
import {map} from 'rxjs/operators';
import {Http, Response} from '@angular/http';
@Component({
  selector: 'app-sourceheadline',
  templateUrl: './sourceheadline.component.html',
  styleUrls: ['./sourceheadline.component.css']
})
export class SourceheadlineComponent implements OnInit {
sourcename = '';
sourceid ;
  constructor(private Source: SourceService, private http: Http) {
    console.log(Source.source);
    this.sourcename = Source.source.name;
    this.sourceid = Source.source.id;
    this.getHeadlines();
    this.getData();
  }
  sourceheadlines: any = {};
  sourceurl = 'https://newsapi.org/v2/top-headlines?sources=' + this.Source.source.id + '&apiKey=3b4e2f2d6d20449fb47da497f2729363';
  ngOnInit() {
  }
  private getData() {
    return this.http.get(this.sourceurl)
      .pipe(map((res: Response) => res.json()));
  }

  private getHeadlines() {
    this.getData().subscribe(data => {
      console.log(data);
      this.sourceheadlines = data;
    });
  }

}
