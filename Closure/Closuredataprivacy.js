const createAccount = (initialBalance) => {
  let balance = initialBalance;

  return {
    deposite: (amount) => {
      if (amount > 0) {
        balance += amount;
        console.log(`deposite ${amount}`);
      } else {
        console.log("Deposite amount must be positive");
      }
    },
    withdraw: (amount) => {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Amount widhraw ${amount}`);
      } else if (amount > balance) {
        console.log("insufficient Balance");
      } else {
        console.log("Withdraw amount must be positive");
      }
    },
    getBalance: () => balance,
  };
};

const myAccount = createAccount(1000);

myAccount.deposite(300);
console.log(myAccount.getBalance());
myAccount.withdraw(400);
console.log(myAccount.getBalance());
