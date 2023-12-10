import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { makeTransactionProps } from '../interfaces/Transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private readonly apiBackend: string =
    environment.apiBackend + 'api/transaction';

  constructor(private readonly httpClient: HttpClient) {}

  makeTransfer(transaction: makeTransactionProps) {
    return this.httpClient.post(`${this.apiBackend}`, transaction, {
      withCredentials: true,
    });
  }

  getTransactions(){
    return this.httpClient.get(`${this.apiBackend}/user`)
  }

}
