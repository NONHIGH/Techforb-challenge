import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { Card } from '../interfaces/Card.interface';
import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private apiBackend = environment.apiBackend + 'api/card';
  protected userId: number | null = null;
  private cardsSubject: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);

  allcards$: Observable<any | null> = this.cardsSubject.asObservable();

  constructor(
    private readonly httpClient: HttpClient,
    private readonly userService: UserService,
    private readonly toastrService:ToastrService
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
    
    return this.httpClient
      .post(`${this.apiBackend}/save/${userId}`, newCard, {withCredentials:true})
      .pipe(
        map((response: any) => {
          if(response?.message){
            this.toastrService.success(`${response?.message}`);
            
          }
          this.getAllCardsOfUser().subscribe().unsubscribe();
          return response;
        }),
        catchError((error: HttpErrorResponse)=>{
          const message = error.error?.message;
          this.toastrService.error(message, "Tarjeta");
          return message;
        })

      );
  }
}