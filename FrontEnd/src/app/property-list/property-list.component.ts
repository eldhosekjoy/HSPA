import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties : Array<any> = [{
    "Id" : 1,
    "Name": "Eldhose House",
    "Type" : "House",
    "Price " : 12000
  },
  {
    "Id" : 2,
    "Name": "Shilpa House",
    "Type" : "House",
    "Price " : 12000
  },
  {
    "Id" : 3,
    "Name": "David House",
    "Type" : "House",
    "Price " : 12000
  },
  {
    "Id" : 4,
    "Name": "Eshaan House",
    "Type" : "House",
    "Price " : 12000
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
