import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Product } from './styles'

function Home() {
  const [products, setProducts] = useState([])
  const inputRef = useRef()

  function addButton() {
    const inputValue = inputRef.current.value.trim();

    if (inputValue !== '') {
      setProducts([{ id: v4(), nome: inputValue }, ...products]);
      inputRef.current.value = ''; 
    }
  }
  
  function deleteProduct(id) {
    setProducts(products.filter(produto => produto.id != id))
  }

  return (
    <Container>
      <h1>Lista de Compras</h1>
      <input placeholder="  digite o produto..." ref={inputRef} onKeyDown={(e) => {if (e.key === 'Enter') addButton() }}/>
      <AddButton onClick={addButton}>Adicionar</AddButton>

      {
        products.map((produto) => (
          <Product key={produto.id}>
            <p>{produto.nome}</p>
            <button onClick={() => deleteProduct(produto.id)} title="DELETE">🗑️</button>
          </Product>
        ))
      }

    </Container>
  )
}

export default Home
