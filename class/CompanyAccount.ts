import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loan: number): void => {
    if (this.getStatus())
      {
      console.log('Voce pegou um empréstimo de: R$' + loan + ' na conta de ' + this.getName())
      this.deposit(loan) 
    }
    else{
      throw new Error('Conta inativa!')
    }
    
  }

  deposit = (deposit: number): void => {
    if (this.getStatus()) {
      super.deposit(deposit);
      console.log('Depósito de: R$' + deposit + ' na conta de ' + this.getName() + ' e o saldo atual é de: R$' + this.getBalance());
    }
  }

}
