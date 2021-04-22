import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as dayjs from 'dayjs';

import { DATE_FORMAT } from 'app/config/input.constants';
import { IPet, Pet } from '../pet.model';

import { PetService } from './pet.service';

describe('Service Tests', () => {
  describe('Pet Service', () => {
    let service: PetService;
    let httpMock: HttpTestingController;
    let elemDefault: IPet;
    let expectedResult: IPet | IPet[] | boolean | null;
    let currentDate: dayjs.Dayjs;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      service = TestBed.inject(PetService);
      httpMock = TestBed.inject(HttpTestingController);
      currentDate = dayjs();

      elemDefault = {
        id: 0,
        name: 'AAAAAAA',
        age: 0,
        imageUrl: 'AAAAAAA',
        registeredDate: currentDate,
      };
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            registeredDate: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Pet', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            registeredDate: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            registeredDate: currentDate,
          },
          returnedFromService
        );

        service.create(new Pet()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Pet', () => {
        const returnedFromService = Object.assign(
          {
            id: 1,
            name: 'BBBBBB',
            age: 1,
            imageUrl: 'BBBBBB',
            registeredDate: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            registeredDate: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should partial update a Pet', () => {
        const patchObject = Object.assign({}, new Pet());

        const returnedFromService = Object.assign(patchObject, elemDefault);

        const expected = Object.assign(
          {
            registeredDate: currentDate,
          },
          returnedFromService
        );

        service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PATCH' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Pet', () => {
        const returnedFromService = Object.assign(
          {
            id: 1,
            name: 'BBBBBB',
            age: 1,
            imageUrl: 'BBBBBB',
            registeredDate: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            registeredDate: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Pet', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });

      describe('addPetToCollectionIfMissing', () => {
        it('should add a Pet to an empty array', () => {
          const pet: IPet = { id: 123 };
          expectedResult = service.addPetToCollectionIfMissing([], pet);
          expect(expectedResult).toHaveLength(1);
          expect(expectedResult).toContain(pet);
        });

        it('should not add a Pet to an array that contains it', () => {
          const pet: IPet = { id: 123 };
          const petCollection: IPet[] = [
            {
              ...pet,
            },
            { id: 456 },
          ];
          expectedResult = service.addPetToCollectionIfMissing(petCollection, pet);
          expect(expectedResult).toHaveLength(2);
        });

        it("should add a Pet to an array that doesn't contain it", () => {
          const pet: IPet = { id: 123 };
          const petCollection: IPet[] = [{ id: 456 }];
          expectedResult = service.addPetToCollectionIfMissing(petCollection, pet);
          expect(expectedResult).toHaveLength(2);
          expect(expectedResult).toContain(pet);
        });

        it('should add only unique Pet to an array', () => {
          const petArray: IPet[] = [{ id: 123 }, { id: 456 }, { id: 36401 }];
          const petCollection: IPet[] = [{ id: 123 }];
          expectedResult = service.addPetToCollectionIfMissing(petCollection, ...petArray);
          expect(expectedResult).toHaveLength(3);
        });

        it('should accept varargs', () => {
          const pet: IPet = { id: 123 };
          const pet2: IPet = { id: 456 };
          expectedResult = service.addPetToCollectionIfMissing([], pet, pet2);
          expect(expectedResult).toHaveLength(2);
          expect(expectedResult).toContain(pet);
          expect(expectedResult).toContain(pet2);
        });

        it('should accept null and undefined values', () => {
          const pet: IPet = { id: 123 };
          expectedResult = service.addPetToCollectionIfMissing([], null, pet, undefined);
          expect(expectedResult).toHaveLength(1);
          expect(expectedResult).toContain(pet);
        });
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
