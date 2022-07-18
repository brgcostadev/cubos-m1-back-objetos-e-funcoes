const carro = {
    ligado: false,
    seLigado: function () {
        return this.ligado == true ? "ligado" : "desligado"
    },
    exibeInfo: function () {
        console.log(`Carro ${this.seLigado()}. Velocidade: ${this.velocidade}`)
    },
    velocidade: 0,
    ligar: function () {
        if (this.ligado) {
            console.log("Este carro já está ligado")
        } else {
            this.ligado = true
            this.exibeInfo()
        }
    },
    desligar: function () {
        if (!this.ligado) {
            console.log("Este carro já está desligado")
        } else {
            this.ligado = false
            this.velocidade = 0
            this.exibeInfo()
        }
    },
    acelerar: function () {
        if (!this.ligado) {
            console.log("Não é possível acelerar um carro desligado")
        } else {
            this.velocidade += 10
            this.exibeInfo()
        }
    },
    desacelerar: function () {
        if (!this.ligado) {
            console.log("Não é possível desacelerar um carro desligado")
        } else {
            this.velocidade -= 10
            this.exibeInfo()
        }
    }
}

carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()