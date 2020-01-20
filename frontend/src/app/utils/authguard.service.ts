import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthguardService implements CanActivate {
  boolValue: boolean;
  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    if (localStorage.getItem("token")) {
      return of(true);
    } else {
      this._router.navigate(["/login"], { skipLocationChange: true });
      return of(false);
    }
  }
}
