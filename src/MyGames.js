import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import { GameContext } from './App.js';
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
  const { gameToAdd } = useContext(GameContext);
  console.log(gameToAdd)
  let counter = 0
  const [listOfGames, setAddnewGame] = useState(["GTA V", "Runescape 3", "Borderlands 2", "Ratchet and clank"])
  const [newGame, setNewGame] = useState('');

  /*UseEffect will trigger to update the list every time a game is added via Context*/
  useEffect(()=>{
    if(gameToAdd && !listOfGames.includes(gameToAdd)){
      setAddnewGame((prevList) => [...prevList, gameToAdd])
    }
  },[gameToAdd])

  function handleGameChange(event){
    setNewGame(event.target.value) //Get data from event meaning from Input
  }
  function handleNewGame() {
    if(listOfGames.includes(newGame)){ //newGame is state managed by react, which is added by the method above
      return
    }
    counter += 1
    console.log(counter)
    setAddnewGame([...listOfGames, newGame]) //Create new array using ... then update it and send the new array with the added game
  }
  function handleRemoveGame(gameToRemove){
    setAddnewGame((prevList) => prevList.filter((game) => game !== gameToRemove) //prevList is the previous state of the list of games
    )
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
            {listOfGames.map((game, index) => {
              return (
                <TableRow key={index} onClick = {() => handleRemoveGame(game)}><TableCell>{game} <Button floated='right' negative> - </Button></TableCell></TableRow>)
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
