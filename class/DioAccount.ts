export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private  status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getStatus = (): boolean => {
    return this.status
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit(deposit: number): void {
    if(this.validateStatus()){
      this.balance += deposit;
    }
  }


  withdraw = (withdraw: number): void => {
    if(this.validateStatus()){
      let setWithdraw = withdraw
      if (setWithdraw > this.balance) {
        throw new Error('Saldo insuficiente!, você possui R$' + this.balance + ' na conta' + ' e tentou sacar: R$' + setWithdraw )
      }
      this.balance -= setWithdraw
      console.log('Saque de: R$' + setWithdraw + ' na conta de ' + this.name + ' e o saldo atual é de: R$' + this.balance)
    }
  }



  getAccountNumber = (): number => {
    return this.accountNumber
  }

  closeAccount = (): void => {
    if(this.validateStatus()){
      this.status = false
      console.log('Conta fechada com sucesso!')
    }
  }

  openAccount = (): void => {
      this.status = true
      console.log('Conta aberta com sucesso!')
  }



  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
