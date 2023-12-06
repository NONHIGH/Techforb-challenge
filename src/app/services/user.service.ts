import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { UserDTO } from '../interfaces/UserDTO.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiBackend = environment.apiBackend;

  private usuarioSubject: BehaviorSubject<UserDTO | null> =
    new BehaviorSubject<UserDTO | null>(null);
  usuario$: Observable<UserDTO | null> = this.usuarioSubject.asObservable();

  constructor(private readonly HttpClient: HttpClient) {}

  getUser(): Observable<any> {
    return this.HttpClient.get<Observable<any>>(`${this.apiBackend}api/user`, {
      withCredentials: true,
    }).pipe(
      map((value: any): UserDTO => {
        this.usuarioSubject.next(value);
        return value;
      })
    );
  }

  public get getUserId(): number | undefined {
    return this.usuarioSubject.getValue()?.id;
  }
}
