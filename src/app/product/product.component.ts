import { Component, OnInit } from '@angular/core';
import { HerbsService } from '../_services/index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
    moduleId: module.id.toString(),
   templateUrl: 'product.component.html',
})
    
export class ProductComponent {
  private _url= 'assets/my.json';
  herbs;
  constructor(private _herbService: HerbsService, private http: HttpClient){}

  columnDefs = [
    {headerName: 'ID', field: 'id'},
    {headerName: 'Brand', field: 'brand'},
    {headerName: 'Category', field: 'category', editable: true},
    {headerName: 'Description', field: 'description', editable: true},
    {headerName: 'Seller', field: 'seller'},
    {headerName: 'Price', field: 'price'}
  ];

  rowData = [];
  ngOnInit() {
    this._herbService.getHerbs()
      .subscribe((resHerbsData) =>{ 
          this.herbs = resHerbsData 
          this.rowData = this.herbs;
          console.log("herb data---",this.herbs)  
        }
    );
  }
     
}
