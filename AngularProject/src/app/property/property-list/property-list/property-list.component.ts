import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/service/housing.service';
import { Property } from 'src/app/types/property.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<Property> = [];
  sellRent = 1;

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit() {

    if(this.route.snapshot.url.toString()){
      this.sellRent = 2;
    }
    else {
      this.sellRent = 1;
    }

    this.housingService.getAllProperties(this.sellRent).subscribe(
      data => {
        console.log(data);
        this.properties = data as Property[];
      }
    )
  }


}
