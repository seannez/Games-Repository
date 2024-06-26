import React from 'react';
import { Menu, Button, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Menu
    fixed='top'
    inverted
    size='large'
    style={{
      borderRadius: 0,
      backgroundColor: 'black',
      border: 'none',
    }}
  >
    <Container>
      <Menu.Item as='a' active>
        Home
      </Menu.Item>
      {/*When adding a new component don't forget to add div style={{ paddingTop: 100, paddingBottom: 100 }} for visibility!!!!!!!!!!!!!!! */}
      <Menu.Item as={Link} to="/mygames">My Games</Menu.Item>
      <Menu.Item as={Link} to="/cards">Search Game</Menu.Item>
      <Menu.Item as={Link} to="/genres">Game Genres</Menu.Item>
      <Menu.Item position='right'>
        <Button inverted>Log in</Button>
        <Button inverted style={{ marginLeft: '0.5em' }}>
          Sign Up
        </Button>
      </Menu.Item>
    </Container>
  </Menu>
);

export default NavBar;
