import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  array;
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('assets/people.json').subscribe(people => {
      this.array = people;
    });
    setTimeout(() => {
      this.array.push({
        id: 4,
        name: 'Mario'
      });
    }, 1000);
    setTimeout(() => {
      this.httpClient.get<any[]>('assets/people.json').subscribe(people => {
        people.push({id: 5, name: 'Marina'});
        this.array = people;
      });
    }, 2000);
  }

  trackById(index, item): number {
    return item.id;
  }
}
