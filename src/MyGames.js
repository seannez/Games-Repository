import React, { useEffect, useState } from 'react';
import {
  Container,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Button,
} from 'semantic-ui-react';
import { GridColumn, Grid, Input, Popup } from 'semantic-ui-react'


function MyGames() {
  let counter = 0
  const [listOfGames, setAddnewGame] = useState(["GTA V", "Runescape 3", "Borderlands 2", "Ratchet and clank"])
  const [newGame, setNewGame] = useState('');

  function handleGameChange(event){
    setNewGame(event.target.value) //Get data from event meaning from Input
  }
  function handleNewGame() {
    counter += 1
    console.log(counter)
    setAddnewGame([...listOfGames, newGame]) //Create new array using ... then update it and send the new array with the added game
  }
  
  return (
    <div style={{ paddingTop: 100, paddingBottom: 100 }}>
      <Container>
        <Table celled inverted selectable>
          <TableHeader>
            <TableRow>
              {/*When typing in the bar use handleGameChange to save it to newGame using the setNewGame useState method*/}
              {/*When clicking on the + sign add the newGame to the array*/}
              <TableHeaderCell>Name <div style={{ float: 'right' }}>
                <Input value = {newGame} onChange = {handleGameChange} placeholder="Enter game" style={{ marginRight: '8px' }}/> {/*value=newGame because that the variable name of the useState*/}
                <Button positive onClick={handleNewGame}> + </Button>
              </div></TableHeaderCell>
              {/*<TableHeaderCell>Notes</TableHeaderCell>*/}
            </TableRow>
          </TableHeader>
          <TableBody>
            {/*To generate row for each game in the array*/}
            {listOfGames.map((game) => {
              return (
                <TableRow><TableCell>{game} <Button floated='right' negative> - </Button></TableCell></TableRow>)
            })
            }
            {/*
      <TableRow>
        <TableCell>John <Button floated='right' negative> - </Button></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jill</TableCell>
      </TableRow>
                  */}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
}

export default MyGames;
