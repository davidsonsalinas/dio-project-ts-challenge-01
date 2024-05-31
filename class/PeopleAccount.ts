import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  private doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.doc_id = doc_id
  }

  deposit = (deposit: number): void => {
    if (this.getStatus()) {
      super.deposit(deposit);
      console.log('Depósito de: R$' + deposit + ' na conta de ' + this.getName() + ' e o saldo atual é de: R$' + this.getBalance());
    }
  }
  
  
}