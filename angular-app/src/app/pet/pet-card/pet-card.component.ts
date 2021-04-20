import { PetService } from './../pet-service';
import { PetEntity } from './../pet-entity';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css'],
})
export class PetCardComponent implements OnInit {
  @Input()
  pet: PetEntity;

  @Input()
  selected: boolean;

  @Output()
  onPetSelected: EventEmitter<PetEntity> = new EventEmitter<PetEntity>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private petService: PetService
  ) {}

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    if (routeParams.has('petId')) {
      this.activatedRoute.params.subscribe((params) => {
        const petIdFromRoute = Number(params['petId']);
        this.pet = this.petService.getById(petIdFromRoute);
      });
    }
  }

  selectPet(selectedPet: PetEntity) {
    this.onPetSelected.emit(selectedPet);
  }
}
