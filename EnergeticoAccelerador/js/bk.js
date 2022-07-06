
document.querySelector('#btnCalcular').addEventListener('click', function(){
    
    const mainResult = document.querySelector('#main')
    let cliente = document.querySelector('#cliente').value
    let qtdComp = document.querySelector('#qtdComp').value
    let icmsPerc = 0.18
    let ipiPerc = 4
    let pisPerc = 1.86
    let cofinsPerc = 8.54

    let totalMercadorias = qtdComp * 4.5
    let icms = totalMercadorias * icmsPerc/100
    let ipi = totalMercadorias * ipiPerc/100
    let pis = totalMercadorias * pisPerc/100
    let cofins = totalMercadorias * cofinsPerc/100
    let somImpostos = icms + ipi + pis + cofins
    let totalComImposto = totalMercadorias + icms + ipi + pis + cofins

    const resultado = document.createElement('ul')
    resultado.setAttribute('class', 'mainResult')

    const empresa = document.createElement('li')
    empresa.innerHTML = `Cliente: ${cliente}`
    resultado.appendChild(empresa)

    const impostos = document.createElement('li')
    impostos.innerHTML = `
    ICMS: R$${icms.toFixed(2)}; 
    IPI: R$${ipi.toFixed(2)}; 
    PIS: R$${pis.toFixed(2)}; 
    COFINS:: R$${cofins.toFixed(2)};
    `
    resultado.appendChild(impostos)

    const totalImpostos = document.createElement('li')
    totalImpostos.innerHTML = `Total Impostos: ${somImpostos}`
    resultado.appendChild(totalImpostos)
    

    mainResult.appendChild(resultado)
})