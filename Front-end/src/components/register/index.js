import React, { useState } from "react";
import './style.css';
import Axios from 'axios';
function Register() {
    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
        setValues(prevValues=>({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));
    };

    const handleClickBtn = () => {
        Axios.post("http://localhost:4000/game",{
            name: values?.name,
            year: parseInt(values?.year),   
            developedBy: values?.developedBy,
            description: values?.description,
            genre: values?.genre
        }).then((response) => {
            console.log(response)
        }).catch(() => {
            alert("Preencha todos os campos!")
        })
    }
    
    return (
    <div className="register">
       <div className="register-container">
        <h1>Games crud</h1>
        <input type="text" name="name" placeholder="Nome" onChange={handleChangeValues}/>
        <input type="number" name="year" placeholder="Ano de lançamento" onChange={handleChangeValues}/>
        <input type="text" name="developedBy" placeholder="Desenvolvedora" onChange={handleChangeValues}/>
        <input type="text" name="description" placeholder="Descrição" onChange={handleChangeValues}/>
        <input type="text" name="genre" placeholder="gênero" onChange={handleChangeValues}/>
        <button onClick={() => handleClickBtn()}>Cadastrar</button>
       </div>
    </div>
  );
}

export default Register;
