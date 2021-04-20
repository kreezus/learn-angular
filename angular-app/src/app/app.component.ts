import { PetService } from './pet/pet-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pageHeader = "Learn Angular with Pet Clinic";

  constructor(private petService: PetService) {}
  ngOnInit(): void {
    console.log('Pets list from App component: ',this.petService.getSyncPets());
  }
}
