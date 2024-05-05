import React from "react";
import { Dropdown } from 'semantic-ui-react'
const genreOption = [
  { key: 'action', value: 'action', flag: 'action', text: 'Action' },
  { key: 'adventure', value: 'adventure', flag: 'adventure', text: 'Adventure' },
  { key: 'role-playing', value: 'role-playing', flag: 'role-playing', text: 'Role-Playing (RPG)' },
  { key: 'shooter', value: 'shooter', flag: 'shooter', text: 'Shooter' },
  { key: 'platformer', value: 'platformer', flag: 'platformer', text: 'Platformer' },
  { key: 'puzzle', value: 'puzzle', flag: 'puzzle', text: 'Puzzle' },
  { key: 'strategy', value: 'strategy', flag: 'strategy', text: 'Strategy' },
  { key: 'simulation', value: 'simulation', flag: 'simulation', text: 'Simulation' },
  { key: 'sports', value: 'sports', flag: 'sports', text: 'Sports' },
  { key: 'racing', value: 'racing', flag: 'racing', text: 'Racing' },
  { key: 'fighting', value: 'fighting', flag: 'fighting', text: 'Fighting' },
  { key: 'sandbox', value: 'sandbox', flag: 'sandbox', text: 'Sandbox' },
  { key: 'survival', value: 'survival', flag: 'survival', text: 'Survival' },
  { key: 'horror', value: 'horror', flag: 'horror', text: 'Horror' },
  { key: 'stealth', value: 'stealth', flag: 'stealth', text: 'Stealth' }
  ]

function Genres(){
    return(
        <Dropdown
    placeholder='Select Genre'
    fluid
    search
    selection
    options={genreOption}
  />
    )
}

export default Genres;