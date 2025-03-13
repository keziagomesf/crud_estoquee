import { useState } from 'react'

function ItensForm({addItens}) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const categories = ["Mac", "IPad", "IPhone", "Apple Watch", "Acessórios"];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !category || !price || !description || !image) {
            alert("Todos os campos são obrigatórios!");
            return;
          };
        addItens(name, category, price, image, description);
        setName("");
        setCategory("");
        setPrice("");
        setDescription("");
        setImage("");
         document.getElementById("fileInput").value = "";
    }

    const numericPrice = Number() / 100

    const handlePriceChange = (e) => {
        let rawValue = e.target.value.replace(/\D/g, "");
        if (!rawValue) { 
            setPrice(""); 
            return;
          }
        let numericValue = Number(rawValue) / 100; 
        let formattedPrice = numericValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        });

  setPrice(formattedPrice);
};
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
      
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result); 
        };
        reader.readAsDataURL(file);
      };
      
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder='Nome'
        value={name}
        onChange={(e) => setName(e.target.value)}
         />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Selecione uma categoria</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Preço"
        value={price}
        onChange={handlePriceChange}
        required
      />
         <input 
        type="text"
        placeholder='Descrição'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
         />
         <input 
        type="file"
        accept='image/*'
        id="fileInput"
        onChange={handleImageUpload}
        className='input-img'
        required
         />
         
         <button type='submit'>Adicionar</button>
    </form>
  )
}

export default ItensForm