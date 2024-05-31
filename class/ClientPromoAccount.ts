import { DioAccount } from "./DioAccount"

export class ClientPromoAccount extends DioAccount {
  private offer: number = 10
  private doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.doc_id = doc_id
  }

deposit = (deposit: number): void => {
  if (this.getStatus()) {
    super.deposit(deposit + this.offer);
    console.log('Voce depositou: R$'+ deposit +' e recebeu um bônus de: R$' + this.offer + ' na conta de ' + this.getName() + ' o saldo atual é de: R$' + this.getBalance());
  }
}
}
