import { Component, OnInit } from '@angular/core';
import {Club} from "../models/Club";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title: string = "Added Clubs:";
  clubs: Club[] = [];
  inputClub: string="";

  constructor() { }

  ngOnInit(): void {
  }

  findClub(id:number):string {
    let output = "";
    this.clubs.map((club,i) => {
      if(i==id) {
        output = club.name;
      }
    })
    console.log(output);
    return output;
  }

  addClub() {
    this.clubs.push({name: this.inputClub})
    AppComponent.clubs.push({name: this.inputClub})
    this.inputClub ="";
  }

  removeClub(id:number) {
    AppComponent.clubs = AppComponent.clubs.filter((v,i) => i != id)
    this.clubs = this.clubs.filter((v,i) => i != id)
  }
}
