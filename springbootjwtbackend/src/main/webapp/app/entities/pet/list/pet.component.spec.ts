import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { PetService } from '../service/pet.service';

import { PetComponent } from './pet.component';

describe('Component Tests', () => {
  describe('Pet Management Component', () => {
    let comp: PetComponent;
    let fixture: ComponentFixture<PetComponent>;
    let service: PetService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [PetComponent],
      })
        .overrideTemplate(PetComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PetComponent);
      comp = fixture.componentInstance;
      service = TestBed.inject(PetService);

      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [{ id: 123 }],
            headers,
          })
        )
      );
    });

    it('Should call load all on init', () => {
      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.pets?.[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
