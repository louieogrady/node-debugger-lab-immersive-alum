module.exports = function account() {
  var output = {}
  var customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: '1'
  }

  function setAccountType () {
    if (customerAccount.checking == 1) {
      customerAccount.type = 'checking'
    } else {
      customerAccount.type = 'savings'
    }
  }

  var signupBonus = 250,
    deposit = 1000

  var openAccount = function(customerAccount, deposit) {
    customerAccount.balance += signupBonus
    output['New balance after signup bonus is '] = customerAccount.balance
    customerAccount.balance += deposit
  }

  output['Account before opening'] = customerAccount

  openAccount(customerAccount, deposit)
  setAccountType()
  output['Account after opening'] = customerAccount
  return output
}
