import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";

  function sleep(milliseconds: number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {
  drawed: string="press Draw to Draw";


  constructor() { }

  ngOnInit(): void {
  }

  getRandomInt(max:number) : number {
    return Math.floor(Math.random()*max);
  }

  getClubname (id:number) : string {
    let output:string="no clubs added";
    AppComponent.clubs.map((club,i) => {
      if(i==id) {
        output = club.name;
      }
    })
    return output;
  }

  draw() {
    let a = this.getRandomInt(10);
    let id = 0;
    for(let i = 0;i<10;i++) {
      let tempId = this.getRandomInt(AppComponent.clubs.length);
      this.drawed = this.getClubname(tempId);
      if (i == a) {
        id = tempId;
      }
      // sleep(300);
      console.log(i);
    }
    this.drawed = id+1+" - "+this.getClubname(id);
  }
}
