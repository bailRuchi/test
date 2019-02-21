import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'm-form-render',
  templateUrl: './form-render.component.html',
  styleUrls: ['./form-render.component.scss']
})
export class FormRenderComponent implements OnInit {
  FormjsonData;
  isValue: boolean;
  public form: Object = {}
  constructor(private _location: Location) { 
    console.log("***********");
    
    if (localStorage.length) {
      this.FormjsonData = localStorage.getItem('event')
      this.form['components'] = JSON.parse(this.FormjsonData);
    }
  }

  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }

  onSubmit(event) {
    console.log(event);
  }
}
