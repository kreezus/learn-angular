import { PetService } from './pet-service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetNotFoundGuard implements CanActivate {
  constructor(private petService: PetService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.petService.getById(Number(route.paramMap.get('petId'))) != null) {
      return true;
    } else {
      this.router.navigate(['/404']);
    }
  }
}
