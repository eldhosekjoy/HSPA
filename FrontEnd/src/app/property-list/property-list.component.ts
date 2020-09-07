import { Component, OnInit } from '@angular/core';

import { HousingService } from '../Services/housing.service';
import { IProperty } from '../Property/Property-card/IProperty.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent =1;

  Properties : Array<IProperty>;

  constructor(private route : ActivatedRoute, private housingService : HousingService ){ }

  ngOnInit(): void {

    if (this.route.snapshot.url.toString())
    {
        this.SellRent=2; //means we are on rent property url else not
    }

    this.housingService.getAllProperties(this.SellRent).subscribe
    (
      data=>{
         this.Properties=data;
        console.log(data);

       },
       error=>{
         console.log(error)
       }

    )
    //this.http.get("data/properties.json").subscribe(

      //data=>{
       // this.Properties=data;
       // console.log(data)
      //}
    //)
  }

}
