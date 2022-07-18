const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    exibeExtrato: function () {
        for (let item of contaBancaria.historicos) {
            console.log(`${item.tipo} de R$ ${item.valor / 100}`)
        }
    },
    depositar: function (valor) {
        this.saldo += (valor * 100)
        console.log(`Deposito de R$ ${this.saldo / 100} realizado para o cliente: ${this.nome}`)
        this.historicos.push({
            tipo: "Depósito",
            valor: valor * 100
        })
    },
    sacar: function (valor) {
        if (this.saldo > valor) {
            this.saldo -= (valor * 100)
            console.log(`Saque de R$ ${valor} realizado para o cliente: ${this.nome}`)
            this.historicos.push({
                tipo: "Saque",
                valor: valor * 100
            })
        } else {
            console.log(`"Saldo insuficiente para o saque de: ${this.nome}`)
        }
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$ ${this.saldo / 100}`);
        console.log('Histórico:');
        this.exibeExtrato()
    }

}

contaBancaria.depositar(100)
contaBancaria.extrato()