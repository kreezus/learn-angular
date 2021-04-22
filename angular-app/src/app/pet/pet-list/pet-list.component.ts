import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../pet-service';
import { PetEntity } from './../pet-entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css'],
})
export class PetListComponent implements OnInit {
  pets: PetEntity[] = [];
  pets$: Observable<PetEntity[]>;
  selectedPet: PetEntity;
  isListLoading: boolean = false;
  constructor(
    private petService: PetService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.activatedRoute.data.subscribe((data: { pets: PetEntity[] }) => {
    //  this.pets = data.pets;
    //});
    this.refreshList();
  }

  transformPet(pet: PetEntity): PetEntity {
    pet.name = pet.name.toUpperCase();
    return pet;
  }
  refreshList() {
    //this.isListLoading = true;
    //this.pets = this.petService.getSyncPets();
    this.pets$ = this.petService.getPets();
    //this.petService.getAsyncPets().subscribe((pets) => {
    //  this.pets = pets;
    //  this.isListLoading = false;
    //});
  }

  addPet(): void {
    this.router.navigate(['pets', 'new']);
  }

  deletePet(petId: number) {
    this.petService.removePet(petId);
    this.selectedPet = undefined;
  }
}
