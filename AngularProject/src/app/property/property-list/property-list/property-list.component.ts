import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/service/housing.service';
import { Property } from 'src/app/types/property.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<Property> = [];

  constructor(private housingService: HousingService) { }

  ngOnInit() {
    this.housingService.getAllProperties().subscribe(
      data => {
        console.log(data);
        this.properties = data as Property[];
      }
    )
  }


}
