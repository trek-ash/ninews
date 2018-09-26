import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.component.html',
  styleUrls: ['./topheadlines.component.css']
})
export class TopheadlinesComponent implements OnInit {
  headlinesurl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=3b4e2f2d6d20449fb47da497f2729363';
  headlines: any = {};
  setclass: 'success';
  constructor(private http: Http) {
    this.getHeadlines();
    this.getData();
  }

  ngOnInit() {
  }

  private getData() {
    return this.http.get(this.headlinesurl)
      .pipe(map((res: Response) => res.json()));
  }

  private getHeadlines() {
    this.getData().subscribe(data => {
      console.log(data);
      this.headlines = data;
    });
  }
}
