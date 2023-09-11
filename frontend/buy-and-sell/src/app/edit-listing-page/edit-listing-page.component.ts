import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {


  listing: Listing | undefined;


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute){}


  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.listing = fakeMyListings.find(value => value.id === id)
  }


  onSubmit():void{
    alert('Saving changes to the listing');
    this.router.navigateByUrl('/my-listings')
  }




}
