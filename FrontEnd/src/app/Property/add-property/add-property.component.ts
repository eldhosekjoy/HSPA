import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../Property-card/IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form')  addPropertyForm :NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  //Will come from master tables from database
  propertyTypes : Array<string> =['House','Appartment','Duples'];
  furnishTypes : Array<string> =['Fully','Semi','Unfurnished'];

  propertyView: IProperty={
    Id:null,
    Name:'',
    Price:null,
    SellRent:null,
    Type:null
  };

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onBack()
  {
    this.router.navigate(['/']);
  }

  onSubmit()
  {
    console.log('congrats form submited');
    console.log(this.addPropertyForm);
  }
  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
