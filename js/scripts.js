const Modal = {
    open() {
        //Abrir Modal
        //Adicionar a class active ao modal
        document.querySelector('.modal-overlay').classList.add('active');

    },
    close() {
        //Fechar modal
        //Remover a class active do modal
        document.querySelector('.modal-overlay').classList.remove('active');
    }
}

const transactions = [{
    id: 1,
    description: 'Luz',
    amount: -500000,
    date: '23/01/2021',

},
{
    id: 2,
    description: 'Internet',
    amount: -500000,
    date: '23/01/2021',
    
},
{
    id: 3,
    description: 'Videogame',
    amount: -500000,
    date: '23/01/2021',
    
}
]
const Money = {
    incomes(){
        //somar as entradas de dinheiro
    },
    expenses(){
        //somar as saidas de dinheiro
    },
    total(){
        //entradas - saidas
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index){
        console.log(transaction)
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction){
        const CSSclass = transaction.amount > 0 ? "income": "expense"

        const html = 
        `
        <tr>
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td><a href="#"><img src="imagens/minus.svg" alt=""></a></td>
        </tr>
        `
        return html
    }
}

transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})
