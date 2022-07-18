function imprimirResumoDoCarrinho(carrinho) {
    let totalQtd = 0
    let totalAPagar = 0
    for (let item of carrinho.produtos) {
        totalQtd += item.qtd
        totalAPagar += (item.precoUnit * item.qtd)
    }
    console.log(`
    Cliente: ${carrinho.nomeDoCliente}
    Total de itens: ${totalQtd}
    Total a pagar ${totalAPagar / 100}
    `)
}

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ]
}

imprimirResumoDoCarrinho(carrinho)
