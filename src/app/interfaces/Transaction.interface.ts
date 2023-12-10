export interface makeTransactionProps{
    senderCardId: number;
    userReceivedId: number;
    amount: number;
    transactionType: TransactionType;
  }

export enum TransactionType {
    EXTRACCION,
    DEPOSITO,
    TRANSFERENCIA
}