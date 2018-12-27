import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HerbsService {
  private _url= 'assets/my.json';
  constructor(private _http: HttpClient) {}
  getHerbs () { 
    return this._http.get(this._url)
      .map((response: Response) => response);
  }
}
