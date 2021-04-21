import { PetService } from './../pet-service';
import { PetType } from './../pet-type';
import { PetEntity } from './../pet-entity';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { petImageUrlValidator } from 'src/app/pet/pet-image-url-validator';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css'],
})
export class PetEditComponent implements OnInit {
  pet: PetEntity;
  public petTypes = Object.values(PetType);
  fileToUpload: File = null;
  petForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private petService: PetService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { pet: PetEntity }) => {
      this.pet = data.pet;
      this.petForm = this.formBuilder.group({
        id: this.formBuilder.control(
          {
            value: this.pet ? this.pet.id : null,
            disabled: this.pet?.id,
          },
          Validators.required
        ),
        name: [this.pet ? this.pet.name : null, Validators.required],
        petType: [
          this.pet ? this.pet.petType : PetType.CAT,
          Validators.required,
        ],
        age: [
          this.pet ? this.pet.age : 2,
          [Validators.required, Validators.max(15)],
        ],
        imageUrl: [
          this.pet ? this.pet.imageUrl : '',
          [Validators.required, petImageUrlValidator(/^https/)],
        ],
        registeredDate: [
          this.pet
            ? this.pet.registeredDate.toISOString().substring(0, 10)
            : new Date().toISOString().substring(0, 10),
          Validators.required,
        ],
        healthPassport: [
          this.pet ? this.pet.healthPassport : null,
          Validators.required,
        ],
      });
    });
  }

  save(pet: PetEntity): void {
    this.petService.addPet(pet);
    this.cancel();
  }
  update(pet: PetEntity): void {
    this.petService.update(pet.id, pet);
  }
  cancel(): void {
    this.router.navigate(['pets']);
  }
  onFileSelected(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(
      'Send this file to the server using multi part, ',
      this.fileToUpload
    );
  }
}
