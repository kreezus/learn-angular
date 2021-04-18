import { PetEntity } from './../pet-entity';
import { Pet } from './../pet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css'],
})
export class PetListComponent implements OnInit {
  pets: PetEntity[] = [];
  selectedPet: PetEntity;
  constructor() {}

  ngOnInit(): void {
    this.pets.push(
      new Pet(
        'Pet1',
        12,
        'https://468915-1496741-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/01/cat-facial-expressions.jpg',
        new Date()
      )
    );
    this.pets.push(
      new Pet(
        'Pet2',
        6,
        'https://cdn.shopify.com/s/files/1/0011/0552/articles/RCF_blog_1400x.jpg?v=1556467722',
        new Date()
      )
    );
    this.pets.push(
      new Pet(
        'Pet3',
        4,
        'https://cdn.pixabay.com/photo/2020/01/21/01/33/dog-4781854_1280.jpg',
        new Date()
      )
    );
  }
}
