const socket = io()

socket.on('listChange', (data)=>{
    //console.log(data)
    updateList(data)
})

const listContainer = document.getElementById('listContainer')

const updateList = (list) => {
    listContainer.innerHTML = ''
    list.forEach((item) => {
        const product = document.createElement('div')
        product.setAttribute('style','display:flex;gap:1rem;align-items:center;')
        product.innerHTML= `
            <h3>${item.tittle}</h3>            
            <p>Description: ${item.description} </p>
            <p>id:${item.id} </p>
            <p>Price: ${item.price} </p>
            <p>code: ${item.code} </p>
            <p>Stock: ${item.stock} </p>
            <p>Status: ${item.status}</p>
            <p>Category: ${item.category}</p>
        `        
        listContainer.appendChild(product)
    });
}
