import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Card } from '../interfaces/Card.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private apiBackend = environment.apiBackend + 'api/card';
  protected userId: number | null = null;
  private cardsSubject: BehaviorSubject<any | null> = new BehaviorSubject<
    any | null
  >([]);

  allcards$: Observable<any | null> = this.cardsSubject.asObservable();

  constructor(
    private readonly httpClient: HttpClient,
    private readonly userService: UserService
  ) {}

  getAllCardsOfUser() {
    return this.httpClient
      .get(`${this.apiBackend}`, { withCredentials: true })
      .pipe(
        map((values: any): Card[] => {
          if (values === null) {
            this.cardsSubject.next([]);
          }
          this.cardsSubject.next(values);
          return values;
        })
      );
  }
  getCardById(cardId: number) {
    return this.httpClient.get(`${this.apiBackend}/${cardId}`).pipe(
      map((value: any) => {
        console.log(value);
        return null;
      })
    );
  }

  addNewCard(newCard: Card) {
    const userId = this.userService.getUserId;
    console.log(userId);
    console.log(this.apiBackend, this.userId);
    
    return this.httpClient
      .post(`${this.apiBackend}/save/${userId}`, newCard, {withCredentials:true})
      .pipe(
        map((value: any) => {
          console.log(value, 'mensaje del backend al crear la tarjeta');

          return value;
        })
      );
  }
}
