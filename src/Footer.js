import React from "react";
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
  } from 'semantic-ui-react';

function Footer(){
    return(
        <Segment inverted vertical style={{ position: 'fixed', bottom: 0, width: '100%', padding: '5em 0em'  }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Email</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                  <List.Item as='a'>Phone Number</List.Item>
                  <List.Item as='a'>Address</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>FAQ</List.Item>
                  <List.Item as='a'>idk </List.Item>
                  <List.Item as='a'>blah blah</List.Item>
                  <List.Item as='a'>Star Wars</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  More Information
                </Header>
                <p>
                What's the difference between a well-dressed man on a unicycle and a poorly dressed man on a bike?

                Attire!
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
}

export default Footer;