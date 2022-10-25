import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  propertyId : number = 0;
  constructor(private route : ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.propertyId = +params['id'];
      }
    )
  }

}
