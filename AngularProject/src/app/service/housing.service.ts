import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Property } from '../types/property.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(sellRent: number) {
    return this.http.get('data/dummy-data.json').pipe(
      map( data => {
          const properties : Array<Property> = []
          for(var item of data as Property[] ){
            if(sellRent == item.sellRent)   {
              properties.push(item);
            }
          }


          return properties;
      })
    )
  }
}
