import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  /**
    * current user
    */
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }


  login(email: string) {
    let user = {
      email: email
    }
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);

  }


  logout() {

    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null!);
  }

}
