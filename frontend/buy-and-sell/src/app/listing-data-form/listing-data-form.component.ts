import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Listing } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {

  @Input() buttonText = '';
  @Output() onSubmit = new EventEmitter<Listing>()

  name: string = '';
  description: string = '';
  price: string = '';


  constructor(private router: Router){}


  ngOnInit(): void {}



  onButtonClicked(): void{
    this.onSubmit.emit({
      id: String(null),
      name: this.name,
      description: this.description,
      price: Number(this.price),
    })
  }




}
