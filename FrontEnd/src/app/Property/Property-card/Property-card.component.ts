import { componentFactoryName } from '@angular/compiler';


import {Component, Input } from '@angular/core';
import { IProperty } from './IProperty.interface';

@Component({
  selector: 'app-property-card',
  //template: '<h1>I am a card  </h1>',
  templateUrl : 'Property-card.component.html',
  styleUrls: ['Property-card.component.css']
})

export class PropertyCardComponent
{
  @Input()  property : IProperty
    //Property : any = {
      //"Id" : 1,
      //"Name": "Eldhose House",
      //"Type" : "House",
      //"Price " : 12000
   // }
}
