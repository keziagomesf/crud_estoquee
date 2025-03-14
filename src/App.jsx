import { useState } from "react";
import "./App.css";
import ItensForm from "./components/ItensForm";
import Products from "./components/Products";
import Modal from "./components/Modal";

function App() {
  const [itens, setItens] = useState([
    { 
      id: 11, 
      name: "Iphone 16 Pro", 
      category: "Iphone", 
      price: "R$10,499", 
      image: "/crud_estoquee/img/iphone16pro.jpg", 
      description: "6,9 ou 6,3 pol."
    },
    { 
      id: 22, 
      name: "Iphone 16", 
      category: "Iphone", 
      price: "R$7,799", 
      image: "/crud_estoquee/img/iphone16.jpg", 
      description: "6,7 pol. ou 6,1 pol"
    },
    { 
      id: 33, 
      name: "MacBook Air", 
      category: "Mac", 
      price: "R$12,499", 
      image: "/crud_estoquee/img/macbookair.png", 
      description: "CPU de 8 núcleos, GPU de 8 núcleos. Memória de 16 GB. SSD de 256 GB"
    },
    { 
      id: 44, 
      name: "MacBook Pro", 
      category: "Mac", 
      price: "R$19,999", 
      image: "/crud_estoquee/img/macbookpro.png", 
      description: "CPU de 10 núcleos. GPU de 10 núcleos. Memória de 16 GB. SSD de 512 GB"
    }
  ]);
  
  const [editProducts, setEditProducts] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const addItens = (name, category, price, image, description) => {
    const id = Date.now() % 10000; 
    setItens([
      ...itens,
      { id, name, category, price, image, description }
    ]);
  };
  

  const startEditProducts = (itens) => {
    setEditProducts(itens);
    setOpenModal(true);
  };

  const removeProduct = (id) => {
    setItens(itens.filter(item => item.id !== id));
  };

  const updatedProduct = (id, name, category, price, description, image) => {
    setItens((prevItens) =>
      prevItens.map((item) =>
          item.id === id ? { ...item, name, category, price, description,image } : item
      ))
    setOpenModal(false);
  }

  return (
    <div className="app">
      <h1>Adicionar Produtos</h1>
      <ItensForm addItens={addItens} />
      <div>
        {itens.map((item) => (
          <Products 
          key={item.id} 
          products={item} 
          startEditProducts={startEditProducts} 
          removeProduct={removeProduct} />
        ))}
      </div>
      <Modal 
      isOpen={openModal}
      onClose={() => setOpenModal(false)}
      itens={editProducts}
      updatedProduct={updatedProduct}
      />
    </div>
  );
}

export default App;