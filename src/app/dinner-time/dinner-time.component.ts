import { Component, OnInit } from '@angular/core';
import {DinnerItem} from '../DinnerItem';

@Component({
  selector: 'app-dinner-time',
  templateUrl: './dinner-time.component.html',
  styleUrls: ['./dinner-time.component.css']
})
export class DinnerTimeComponent implements OnInit {
  Items:DinnerItem[] = [];
  constructor() { }

  ngOnInit() {
  }
  save(name:string):void{
    console.log(name.trim());
    if(!name.trim())
      return;
    
    const id = this.getNextId(this.Items);

    this.Items.push({Id:id, Name:name});
  }

  getNextId(items:any):number{
    const things = items
    if(!things || things.length <= 0 )
      return 1;

    things.sort(function(a,b) {return (a.Id > b.Id) ? 1 : ((b.Id > a.Id) ? -1 : 0);} ); 
    return things[things.length - 1].Id++;
  }
}
