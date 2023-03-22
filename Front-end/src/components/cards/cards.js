import React from 'react';
import './style.css';
import FormDialog from '../edit-form/edit';

function Card(props) {    
    const [open, setOpen] = React.useState(false);
    
    const handleClickCard = () => {
        setOpen(true)
    }
    return(
        <>
        <FormDialog 
            open={open} 
            setOpen={setOpen}
            name={props.name}
            year={props.year}
            description={props.description}
            developedBy={props.developedBy}
            genre={props.genre}
            setListCard={props.setListCard}
            id={props.id}
        />
        <div className='container'>
            <div className='cards'>
                <h1>{props.name}</h1>
                <p className='genre'>{props.genre}</p>
                <p className='description'>{props.description}</p>
                <p className='subtitle'>{props.developedBy}, {props.year}</p>
                <button onClick={() => handleClickCard()}>Editar</button>
            </div>
        </div>
        </>
)}

export default Card;