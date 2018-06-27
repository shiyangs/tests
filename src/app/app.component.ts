import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Wonderful Day!';
  t2 = "weather";
  printDate(e) {
    alert(e.month);
  }
}
