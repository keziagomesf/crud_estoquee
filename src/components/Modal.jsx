import {useEffect, useState} from 'react'

function Modal({isOpen, onClose, itens, updatedProduct}) {
    const [newName, setNewName] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const[newImage, setNewImage] = useState("");

    useEffect(() => {
        if(itens) {
            setNewName(itens.name);
            setNewCategory(itens.category);
            setNewPrice (itens.price);
            setNewDescription(itens.description);
            setNewImage(itens.image);
        }
    }, [itens])

    if (!isOpen) return null;

    const handleUpdated = () => {
        updatedProduct(itens.id, newName, newCategory, newPrice, newDescription, newImage);
    };
    
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
      
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewImage(reader.result); 
        };
        reader.readAsDataURL(file);
      };
  return (
    <div style={styles.overlay} onClick={onClose}>
        <div 
        style={styles.modal} 
        onClick={(e) => e.stopPropagation()}>
        <h2>Editar Item</h2>
        <input 
        type="text" 
        value={newName} 
        onChange={(e) => setNewName(e.target.value)} />
        <input 
        type="text" 
        value={newCategory} 
        onChange={(e) => setNewCategory(e.target.value)} />
        <input 
        type="number" 
        value={newPrice !== undefined ? newPrice : ""} 
        min="0"
        step="0.01" 
        onChange={(e) => setNewPrice(parseFloat(e.target.value) || 0)}  />
        <input 
        type="text" 
        value={newDescription} 
        onChange={(e) => setNewDescription(e.target.value)} />
        <input 
        type="file"
        accept='image/*'
        id="fileInput"
        onChange={handleImageUpload}
        className='input-img'
        required
         />
        <button onClick={handleUpdated}>Salvar alterações</button>
        <button onClick={onClose}>Cancelar</button>
        </div>
    </div>
  )
}

const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.64)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    modal: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
      minWidth: "300px",
      textAlign: "center",
    },
  };

export default Modal