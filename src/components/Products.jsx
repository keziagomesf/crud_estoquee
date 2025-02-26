function Products({ products, startEditProducts, removeProduct }) {
  
    return (
      <div className="itens">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Descrição</th>
                    <th>Imagem</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
            <tr key={products.id}>
              <td>{products.id}</td>
              <td>{products.name}</td>
              <td>{products.category}</td>
              <td>R${products.price}</td>
              <td>{products.description}</td>
              <td><img src={products.image} alt={products.name} className="product-image" /></td>
              <td>
                <button onClick={() => startEditProducts(products)}>Editar</button>
                <button onClick={() => removeProduct(products.id)} className="remove">Deletar</button>
              </td>
            </tr>
        </tbody>
            
        </table>
      </div>
    );
  }
  
  export default Products;