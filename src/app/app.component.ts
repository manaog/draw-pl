import { Component } from '@angular/core';
import {Club} from "./models/Club";
import {ListComponent} from "./list/list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'draw-pl';
  static clubs: Club[] = [];
}
