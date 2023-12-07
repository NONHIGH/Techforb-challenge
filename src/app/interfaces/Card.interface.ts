export interface Card {
  balance: number;
  dueDate: string;
  headline: string;
  numberCard: number;
  securityCode: string;
}

export interface CardDTO {
  id: number;
  balance: number;
  dueDate: Date;
  headline: string;
  numberCard: number;
}
