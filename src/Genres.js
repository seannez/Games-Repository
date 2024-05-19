import React, { useEffect, useState } from 'react';
import { Card, CardMeta, CardHeader, CardDescription, CardContent, Icon, Image, Grid, GridRow, GridColumn, Segment, Container } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'angular', text: 'Action', value: 'Action' },
  { key: 'css', text: 'Adventure', value: 'Adventure' },
  { key: 'design', text: 'Role-playing (RPG)', value: 'Role-playing (RPG)' },
  { key: 'ember', text: 'Shooter', value: 'Shooter' },
  { key: 'html', text: 'Platformer', value: 'Platformer' },
  { key: 'ia', text: 'Puzzle', value: 'Puzzle' },
  { key: 'javascript', text: 'Strategy', value: 'Strategy' },
  { key: 'mech', text: 'Simulation', value: 'Simulation' },
  { key: 'meteor', text: 'Sports', value: 'Sports' },
  { key: 'node', text: 'Racing', value: 'Racing' },
  { key: 'plumbing', text: 'Fighting', value: 'Fighting' },
  { key: 'python', text: 'Sandbox', value: 'Sandbox' },
  { key: 'rails', text: 'Survival', value: 'Survival' },
  { key: 'react', text: 'Horror', value: 'Horror' },
  { key: 'repair', text: 'Stealth', value: 'Stealth' },
]


function Genres() {
    return (
        <div style={{ paddingTop: 100, paddingBottom: 100 }}>
            <Container>
            <Dropdown placeholder='Pick a genre' fluid multiple selection options={options} />
            </Container>
        </div>
    );
}

export default Genres;
