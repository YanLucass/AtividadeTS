class Conta {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  public deposito(valor: number): void {
    this.saldo += valor;
  }

  public saque(valor: number): void {
    if (valor > this.saldo) {
      throw new Error('Saldo insuficiente');
    }
    this.saldo -= valor;
  }

  public getSaldo(): number {
    return this.saldo;
  }
}

(function() {
  const conta = new Conta(1000);
  console.log(conta.getSaldo());

  conta.deposito(500);
  console.log(conta.getSaldo());

  conta.saque(200);
  console.log(conta.getSaldo());

  try {
    conta.saque(2000);
  } catch (error) {
    console.log(error.message);
  }
})();
