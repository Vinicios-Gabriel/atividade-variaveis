let m = 90_000
//

let c = 60_000

let n = 24

let taxa = (m / c) ** (1 / n) - 1

console.log(`O seu financiamento de 60000 reais teve uma taxa de juros de ${taxa * 100}, pois após 24 meses você teve que pagar 90000 reais.`)