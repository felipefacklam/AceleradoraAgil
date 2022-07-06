var precoUnitario = 4.5
var icmsPerc = 18/100
var ipiPerc = 4/100
var pisPerc = 1.86/100
var cofinsPerc = 8.54/100

class Pedido {

    constructor(){
        this.arrayPedidos = []
        this.id = 0
    }

    salvar(){
        let pedido = this.lerDados()
        this.adicionar(pedido)
        // if(this.validaCampos(pedido)==true){
        // }
        this.listaTabela()
        this.cancelar()
    }

    listaTabela(){
        let tbody = document.querySelector('#tbody')
        tbody.innerText = ''
        
        for(let i=0; i<this.arrayPedidos.length; i++){
            let tr = tbody.insertRow()
            // let tdId = tr.insertCell()
            let tdCliente = tr.insertCell()
            let tdIcms = tr.insertCell()
            let tdIpi = tr.insertCell()
            let tdPis = tr.insertCell()
            let tdCofins = tr.insertCell()
            let tdTotal = tr.insertCell()
            let tdDelete = tr.insertCell()
            tdDelete.classList.add('center')
            let imgDelete = document.createElement('img')
            imgDelete.src = 'imgs/delete.png'
            imgDelete.setAttribute("onclick", "pedido.deletar("+this.arrayPedidos[i].id+")")
            
            // tdId.innerText = this.arrayPedidos[i].id
            tdCliente.innerText = this.arrayPedidos[i].cliente
            tdIcms.innerText = `R$${this.arrayPedidos[i].icms.toFixed(2)}`
            tdIpi.innerText = `R$${this.arrayPedidos[i].ipi.toFixed(2)}` 
            tdPis.innerText = `R$${this.arrayPedidos[i].pis.toFixed(2)}`
            tdCofins.innerText = `R$${this.arrayPedidos[i].cofins.toFixed(2)}`
            tdTotal.innerText = `R$${this.arrayPedidos[i].total.toFixed(2)}`
            tdDelete.appendChild(imgDelete)
        }
        
    }
    
    adicionar(pedido){
        this.arrayPedidos.push(pedido)
        this.id++
    }

    lerDados(){
        let pedido = {};

        pedido.id = this.id
        pedido.cliente = document.querySelector('#cliente').value
        pedido.qtd = document.querySelector('#qtd').value
        pedido.totalMercadoria = pedido.qtd * precoUnitario
        pedido.icms = (pedido.totalMercadoria * icmsPerc)
        pedido.ipi = (pedido.totalMercadoria * ipiPerc)
        pedido.pis = (pedido.totalMercadoria *pisPerc)
        pedido.cofins = (pedido.totalMercadoria * cofinsPerc)
        pedido.total = pedido.totalMercadoria + pedido.icms + pedido.ipi + pedido.pis + pedido.cofins
        pedido.totalGeral += pedido.total

        return pedido
    }

    validaCampos(pedido){
        if(pedido.cliente == '' || pedido.qtd == ''){
            alert('Informe todos os campos')
            return false
        }
        return true
    }

    cancelar(){
        pedido.cliente = document.querySelector('#cliente').value = ''
        pedido.qtd = document.querySelector('#qtd').value = ''
    }

    deletar(id){
        for(let i=0; i<this.arrayPedidos.length; i++){
            if(this.arrayPedidos[i].id == id){
                this.arrayPedidos.splice(i, 1)
            }
        }
    }
}

var pedido = new Pedido()