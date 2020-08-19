import { componentFactoryName } from '@angular/compiler';


import {Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  //template: '<h1>I am a card  </h1>',
  templateUrl : 'Property-card.component.html',
  styleUrls: ['Property-card.component.css']
})

export class PropertyCardComponent
{
    Property : any = {
      "Id" : 1,
      "Name": "Eldhose House",
      "Type" : "House",
      "Price " : 12000
    }
}
