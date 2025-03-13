function Products({ products, startEditProducts, removeProduct }) {
  

    return (
      <div className="itens-container">
        <table className="reponsive-table">
            <thead>
                <tr>
                    <th className="id-style">Id</th>
                    <th className="name">Nome</th>
                    <th className="category">Categoria</th>
                    <th className="price">Preço</th>
                    <th className="description">Descrição</th>
                    <th className="image">Imagem</th>
                    <th className="action">Ação</th>
                </tr>
            </thead>
            <tbody>
            <tr key={products.id}>
              <td>{products.id}</td>
              <td>{products.name}</td>
              <td>{products.category}</td>
              <td>{products.price}</td>
              <td>{products.description}</td>
              <td><img src={products.image} alt={products.name} className="product-image" /></td>
              <td className="action-buttons">
              <button onClick={() => startEditProducts(products)} className="edit">
              Editar
              </button>
              <button onClick={() => removeProduct(products.id)} className="remove">
              Deletar
              </button>
            </td>
            </tr>
        </tbody>
            
        </table>
      </div>
    );
  }
  
  export default Products;