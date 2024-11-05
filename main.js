var valor = sessionStorage.getItem('tipo');

let itens = 0
let objetos = {
    almoco: {
        alimento1: {
            nome: "Filé de frango grelhado com legumes",
            url: "https://guibon.com.br/wp-content/uploads/2019/04/POST_FRANGO_GRELHADO.png",
            preco: 12.99,
            quantidade: 0,
            id: 'almoco1'
        },
        alimento2: {
            nome: "Bacalhau à Gomes de Sá",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-a-55pFS91skPyMsvrYgOf19Ev76KBRjIg&s",
            preco: 24.99,
            quantidade: 0,
            id: 'almoco2'
        },
        alimento3:{
            nome: "Feijoada completa",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFL7MAIIhDIbxHbpeNGblgcEaqADZBBA6xQA&s",
            preco: 9.99,
            quantidade: 0,
            id: 'almoco3'
        },
        alimento4:{
            nome: "Risoto de camarão",
            url: "https://s2-receitas.glbimg.com/aEEySxInkPQuDch21Kp1ZI-pRqI=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/A/5/RQBWn4SlyzO0JWxYflwg/capa-materia-gshow-102-.png",
            preco: 33.99,
            quantidade: 0,
            id: 'almoco4'
        },
        alimento5:{
            nome: "Bife à parmegiana",
            url: "https://static.itdg.com.br/images/640-440/0044ed89b86defc08ed44dd038a0bbc9/44412-108032-original.jpg",
            preco:  35.99,
            quantidade: 0,
            id: 'almoco5'
        },
        alimento6:{
            nome: "Lasanha bolonhesa",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Gzug3YnpfQZU_3jKntdgixnZ66QPUhZfWQ&s",
            preco: 42.99,
            quantidade: 0,
            id: 'almoco6'
        },
    },

    jantar: {
        alimento1: {
            nome: "Salmão assado com purê de batata",
            url: "https://img.freepik.com/fotos-premium/salmao-grelhado-com-aspargos-frescos-e-pure-de-batatas-em-um-prato-comida-saudavel-em-cima-da-mesa_230432-792.jpg",
            preco: 25.99,
            quantidade: 0,
            id: 'jantar1'
        },
        alimento2: {
            nome: "Espaguete à carbonara",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXIfB-1ROc8K7fkFTwv0h-CYK4ThTsOMotOw&s",
            preco: 16.99,
            quantidade: 0,
            id: 'jantar2'
        },
        alimento3:{
            nome: "Strogonoff de carne",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQniJivKAZH4MUNQvLn159wfKQP8rsDjy4dYQ&s",
            preco: 17.99,
            quantidade: 0,
            id: 'jantar3'
        },
        alimento4:{
            nome: "Moqueca de peixe",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqUvecFyZ2KvJXpWhTKCOuXIuUEKsE2d5Jg&s",
            preco: 26.99,
            quantidade: 0,
            id: 'jantar4'
        },
        alimento5:{
            nome: "Pizza de quatro queijos",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjYOR-b874cqbx24PmNHTSJpyKAWuYKHs8A&s",
            preco: 39.99,
            quantidade: 0,
            id: 'jantar5'
        },
        alimento6:{
            nome: "Cordeiro assado com ervas",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyj7ckGtnVlPXcvu7LtO66-RIiuy6OtmKEg&s",
            preco: 24.99,
            quantidade: 0,
            id: 'jantar6'
        },
    },

    sobremesas: {
        alimento1: {
            nome: "Pudim de leite condensado",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ437ktz9bR0qcAksAvjrA0C5TiZXsWcTd7IA&s",
            preco: 5.99,
            quantidade: 0,
            id: 'sobremesas1'
        },
        alimento2: {
            nome: "Brigadeiro gourmet",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ13oUuL4wnbLXUqSMQ0P-tlfm7GVmmBVvQ&s",
            preco: 4.99,
            quantidade: 0,
            id: 'sobremesas2'
        },
        alimento3:{
            nome: "Tiramisu",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFR4EjdRBocaRU6sgJ-rw7y3CBDzijYZquyw&s",
            preco:  9.99,
            quantidade: 0,
            id: 'sobremesas3'
        },
        alimento4:{
            nome: "Cheesecake de frutas vermelhas",
            url: "https://static.itdg.com.br/images/1200-675/82c1b633bec7d6b3c7c5fd7f0890741c/179504-original.jpg",
            preco: 12.99,
            quantidade: 0,
            id: 'sobremesas4'
        },
        alimento5:{
            nome: "Petit gateau",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhvbt6beFAIkH1ZY-uJ3-QJmDClOS2i_6wg&s",
            preco: 19.99,
            quantidade: 0,
            id: 'sobremesas5'
        },
        alimento6:{
            nome: "Torta de limão",
            url: "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/2c753bd29007f95abbedde5d9087c4d4.png?itok=IEjczbgq",
            preco: 29.99,
            quantidade: 0,
            id: 'sobremesas6'
        },
    },

    bebidas: {
        alimento1: {
            nome: "Suco de laranja natural",
            url: "https://img.freepik.com/fotos-premium/jarra-de-suco-de-laranja-e-frutas-laranja-com-folhas-verdes_80510-1088.jpg",
            preco: 3.99,
            quantidade: 0,
            id: 'bebidas1'
        },
        alimento2: {
            nome: "Caipirinha clássica",
            url: "https://i.panelinha.com.br/i1/228-q-8730-blog-caipirinha-de-limao.webp",
            preco: 14.99,
            quantidade: 0,
            id: 'bebidas2'
        },
        alimento3:{
            nome: "Vinho tinto chileno",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDaNLDJ_bNNPLdW3r6sJ1cr6SmPfTs271aA&s",
            preco: 29.99,
            quantidade: 0,
            id: 'bebidas3'
        },
        alimento4:{
            nome: "Mojito",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ15eNGn0snt7NHlV4UWz2Zr4fudMUTpO_oww&s",
            preco: 19.99,
            quantidade: 0,
            id: 'bebidas4'
        },
        alimento5:{
            nome: "Água de coco",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0oPDf8VmOls9ZA8VPHYgfZvurOMHEQiJwdw&s",
            preco: 5.99,
            quantidade: 0,
            id: 'bebidas5'
        },
        alimento6:{
            nome: "Café expresso",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkWjkG9DwiBmyR5mEmCY6fHQ1pkKVwmheUIA&s",
            preco: 3.99,
            quantidade: 0,
            id: 'bebidas6'
        },
    }
}

function MudarTipo(novoTipo){
    sessionStorage.setItem('tipo', novoTipo)
}

var IdBotaoAnterior = 'none'

AlterarItens(valor, `botaoCardapio${valor}`)

function AlterarItens(nome, idBotao){
    if (IdBotaoAnterior != 'none'){
        var botao = document.getElementById(IdBotaoAnterior)

        botao.style.backgroundColor = "#ffffff"
    }

    sessionStorage.setItem('tipo', nome)
    valor = sessionStorage.getItem('tipo');
    console.log(valor)

    if (idBotao != 'none'){
        var botao = document.getElementById(idBotao)

        IdBotaoAnterior = idBotao

        botao.style.backgroundColor = "#b3febb"
    }

    var divs = document.querySelectorAll('.alimento')

    divs.forEach(div => {
        div.classList.add('hidden')
    })
    
    setTimeout(() => {
        for (let i = 1; i<=6; i++){

            var tipoComida = objetos[nome]
            
            var comida = tipoComida[`alimento${i}`]

            var comidaSiteNome = document.getElementById(`alimento${i}Nome`)
            comidaSiteNome.innerHTML = comida.nome

            var comidaSitePreco = document.getElementById(`alimento${i}Preco`)
            comidaSitePreco.innerHTML = comida.preco

            var comidaSiteImagem = document.getElementById(`alimento${i}Imagem`)
            comidaSiteImagem.src = comida.url

        }
    }, 750)
    
    divs.forEach(div => {
        setTimeout(() => {
            console.log('removeu')
            div.classList.remove('hidden')
            
        }, 1500)
    })
    
    
}

function AdicionarItemAoCarrinho(item, tipo){

    console.log(item)
    itens += 1
    
    let quantidade = document.getElementById('QuantidadeDeItens')
    quantidade.innerHTML = `Quantidade de itens: ${itens}`

    let carrinho = document.querySelector('.carrinho')
    if (itens == 1){
        carrinho.classList.add('mostrar')
    }

    let comida = objetos[valor][item]
    if (tipo == null){
        comida = objetos[valor][item]
    }
    else{
        comida = objetos[tipo][item]
    }
    comida.quantidade += 1 

    const itensDoCarrinho = document.getElementById('ItensDoCarrinho');

    if (comida.quantidade == 1){
        const novoItem = document.createElement('p');
        novoItem.id = `paragrafo${comida.id}carrinho`

        novoItem.innerHTML = `<img src="${comida.url}" alt="${valor}"> ${comida.nome}
        <div class="QuantidadeCaixaExterna">
            <div class='DiminuirAumentarQuantidade'>
                <button onclick="RemoverItemDoCarrinho('${item}', '${valor}')">-</button>
                <p id="${comida.id}QuantidadeCarrinho">1</p>
                <button onclick="AdicionarItemAoCarrinho('${item}', '${valor}')">+</button>
            </div>  
            <p id="${comida.id}PrecoQuantidadeTotalCarrinho">R$ ${comida.preco}</p>
        </div>`; 
    
        itensDoCarrinho.appendChild(novoItem);
    }
    else{
        const itemAnterior = document.getElementById(comida.id + 'QuantidadeCarrinho')
        
        itemAnterior.innerHTML = comida.quantidade

        var precoProduto = document.getElementById(`${comida.id}PrecoQuantidadeTotalCarrinho`)

        precoProduto.innerHTML = `R$ ${(comida.preco * comida.quantidade).toFixed(2)}`
    }

    PrecoTotalCarrinho = document.getElementById('ParagrafoPrecoTotalCarrinho')

        let soma = 0

        for (let nome in objetos){
            for (let i = 1; i <= 6; i++){
                soma += objetos[nome][`alimento${i}`].preco * objetos[nome][`alimento${i}`].quantidade
            }
        }
        PrecoTotalCarrinho.innerHTML = `Preço total: R$${soma.toFixed(2)}`
    
}

function RemoverItemDoCarrinho(item, tipo){
    itens -= 1
    
    let quantidade = document.getElementById('QuantidadeDeItens')
    quantidade.innerHTML = `Quantidade de itens: ${itens}`

    let carrinho = document.querySelector('.carrinho')

    if (itens == 0){
        carrinho.classList.remove('mostrar')
        carrinho.classList.remove('exibir')
        ExpandirRecolherCarrinho()
    }

    const comida = objetos[tipo][item]
    comida.quantidade -= 1 

    const itensDoCarrinho = document.getElementById('ItensDoCarrinho');

    if (comida.quantidade == 0){
        let novoItem = document.getElementById(`paragrafo${comida.id}carrinho`)

        itensDoCarrinho.removeChild(novoItem)
    }
    else{
        const itemAnterior = document.getElementById(comida.id + 'QuantidadeCarrinho')
        
        itemAnterior.innerHTML = comida.quantidade

        var precoProduto = document.getElementById(`${comida.id}PrecoQuantidadeTotalCarrinho`)

        precoProduto.innerHTML = `R$ ${(comida.preco * comida.quantidade).toFixed(2)}`
    }

    PrecoTotalCarrinho = document.getElementById('ParagrafoPrecoTotalCarrinho')

    let soma = 0

    for (let nome in objetos){
        for (let i = 1; i <= 6; i++){
            soma += objetos[nome][`alimento${i}`].preco * objetos[nome][`alimento${i}`].quantidade
        }
    }
    PrecoTotalCarrinho.innerHTML = `Preço total: R$${soma.toFixed(2)}`
}

function ExpandirRecolherCarrinho(){

    let carrinho = document.querySelector('.carrinho')
    let botao = document.getElementById('ExpandirRecolherCarrinho')

    if (carrinho.className == 'carrinho mostrar'){
        carrinho.classList.remove('mostrar')
        carrinho.classList.add('exibir')
        botao.innerHTML = '<img src="https://cdn-icons-png.freepik.com/512/60/60992.png" alt="">Recolher carrinho'

    }else if (carrinho.className == 'carrinho exibir'){
        carrinho.classList.remove('exibir')
        carrinho.classList.add('mostrar')
        botao.innerHTML = '<img src="https://cdn-icons-png.freepik.com/512/60/60992.png" alt="">Visualisar carrinho'
    }
    else{
        botao.innerHTML = '<img src="https://cdn-icons-png.freepik.com/512/60/60992.png" alt="">Visualisar carrinho'
    }
}

function finalizarCompra(){

    itens = 0
    
    let quantidade = document.getElementById('QuantidadeDeItens')
    quantidade.innerHTML = `Quantidade de itens: ${itens}`

    let carrinho = document.querySelector('.carrinho')

    if (itens == 0){
        carrinho.classList.remove('mostrar')
        carrinho.classList.remove('exibir')
        ExpandirRecolherCarrinho()
    }

    const itensDoCarrinho = document.getElementById('ItensDoCarrinho');

    PrecoTotalCarrinho = document.getElementById('ParagrafoPrecoTotalCarrinho')

    let soma = 0

    for (let nome in objetos){
        for (let i = 1; i <= 6; i++){
            objetos[nome][`alimento${i}`].quantidade = 0

            let novoItem = document.getElementById(`paragrafo${objetos[nome][`alimento${i}`].id}carrinho`)

            if (novoItem != null){
                itensDoCarrinho.removeChild(novoItem)
            }

        
        }
    }
    PrecoTotalCarrinho.innerHTML = `Preço total: R$${soma.toFixed(2)}`
}
