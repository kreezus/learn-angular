import { PetEntity } from './../pet-entity';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  selectPet(selectedPet: PetEntity) {
    this.onPetSelected.emit(selectedPet);
  }
}
