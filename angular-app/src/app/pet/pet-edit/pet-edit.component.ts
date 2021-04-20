import { PetService } from './../pet-service';
import { PetType } from './../pet-type';
import { PetEntity } from './../pet-entity';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css'],
})
export class PetEditComponent implements OnInit {
  pet: PetEntity;
  public petTypes = Object.values(PetType);

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private petService: PetService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { pet: PetEntity }) => {
      this.pet = data.pet;
    });
  }

  save(pet: PetEntity): void {
    this.petService.addPet(pet);
    this.cancel();
  }
  update(pet: PetEntity): void {}
  cancel(): void {
    this.router.navigate(['pets']);
  }
}
