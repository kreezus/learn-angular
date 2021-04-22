import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IPet } from '../pet.model';
import { PetService } from '../service/pet.service';
import { PetDeleteDialogComponent } from '../delete/pet-delete-dialog.component';

@Component({
  selector: 'jhi-pet',
  templateUrl: './pet.component.html',
})
export class PetComponent implements OnInit {
  pets?: IPet[];
  isLoading = false;

  constructor(protected petService: PetService, protected modalService: NgbModal) {}

  loadAll(): void {
    this.isLoading = true;

    this.petService.query().subscribe(
      (res: HttpResponse<IPet[]>) => {
        this.isLoading = false;
        this.pets = res.body ?? [];
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  ngOnInit(): void {
    this.loadAll();
  }

  trackId(index: number, item: IPet): number {
    return item.id!;
  }

  delete(pet: IPet): void {
    const modalRef = this.modalService.open(PetDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.pet = pet;
    // unsubscribe not needed because closed completes on modal close
    modalRef.closed.subscribe(reason => {
      if (reason === 'deleted') {
        this.loadAll();
      }
    });
  }
}
