import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from 'axios'
export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    year: props.year,
    description: props.description,
    developedBy: props.developedBy,
    genre: props.genre
  });

  // Editar cadastros
  const handleEditGame = () => {
    Axios.put("http://localhost:4000/game", {
        id: editValues.id,
        name: editValues.name,
        year: editValues.year,
        description: editValues.description,
        developedBy: editValues.developedBy,
        genre: editValues.genre
    });
    handleClose();
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangesValues = value => {
    setEditValues(prevValues => ({
        ...prevValues,
        [value.target.id]: value.target.value
    }))
  }

  //Deletar cadastros
  const handleDeleteGames = () => {
    Axios.delete(`http://localhost:4000/game/${editValues.id}`).then(() => {alert(`${editValues.name} deletado`)})
    handleClose();
  }

  return (
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.name}
            onChange={handleChangesValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="developedBy"
            label="Desenvolvedora"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.developedBy}
            onChange={handleChangesValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="year"
            label="Ano de lançamento"
            type="number"
            fullWidth
            variant="standard"
            defaultValue={props.year}
            onChange={handleChangesValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="genre"
            label="Gênero"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.genre}
            onChange={handleChangesValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Descrição"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.description}
            onChange={handleChangesValues}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={() => handleDeleteGames()}>Deletar</Button>
          <Button onClick={() => handleEditGame()}>Salvar</Button>
        </DialogActions>
      </Dialog>
  );
}
