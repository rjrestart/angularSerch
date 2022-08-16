import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchPageService {

  constructor(
    private httpClient: HttpClient, 
  ) { }


  public search(searchString:string):Observable<any>{ 
    return  this.httpClient.get<any>(`https://api.github.com/search/repositories?q=` + searchString)
  }
}
