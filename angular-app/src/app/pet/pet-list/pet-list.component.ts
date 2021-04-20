import { PetService } from '../pet-service';
import { PetEntity } from './../pet-entity';
import { Pet } from './../pet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css'],
})
export class PetListComponent implements OnInit {
  pets: PetEntity[] = [];
  selectedPet: PetEntity;
  isListLoading: boolean = false;
  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.isListLoading = true;
    //this.pets = this.petService.getSyncPets();
    this.petService.getAsyncPets().subscribe((pets) => {
      this.pets = pets;
      this.isListLoading = false;
    });
  }

  addPet(): void {
    const petId = this.pets.length + 1;
    this.petService.addPet(
      new Pet(
        petId,
        `Pet${petId}`,
        8,
        'https://cdn.pixabay.com/photo/2020/01/21/01/33/dog-4781854_1280.jpg',
        new Date()
      )
    );
  }

  deletePet(petName: string) {
    this.petService.removePet(petName);
    this.selectedPet = undefined;
  }
}
