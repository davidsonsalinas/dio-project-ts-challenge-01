import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { ClientPromoAccount } from './class/ClientPromoAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Davidson', 10)
console.log(peopleAccount)
peopleAccount.deposit(40)
peopleAccount.withdraw(40)
peopleAccount.closeAccount()
peopleAccount.openAccount()


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(80)
companyAccount.withdraw(30)
companyAccount.getLoan(1000)

const clientOfferAccount: ClientPromoAccount = new ClientPromoAccount(1, 'Luckyboy', 30)
console.log(clientOfferAccount)
clientOfferAccount.deposit(50)
