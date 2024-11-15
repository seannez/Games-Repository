import React from 'react'
import { Menu, Button, Container, Segment } from 'semantic-ui-react'
import { Header, Icon } from 'semantic-ui-react';

function Home(){
  return (
    <div>
    <Segment inverted textAlign='center' vertical style={{ minHeight: 700, padding: '1em 0em', paddingBottom: '100px' }}>
  <Container text>
    <Header
      as='h1'
      content='Discover new games'
      inverted
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
      }}
    />
    <Header
      as='h2'
      content='create your own game lists'
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
</Segment>
<Segment inverted textAlign='center' vertical style={{ minHeight: 10, padding: '1em 0em', paddingBottom: '10px' }}></Segment>
</div>
  )
}

export default Home