import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tpt-paginator-app';
  first;
  onPageChange(data) {
    console.log(data);
  }
}
