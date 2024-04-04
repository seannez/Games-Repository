import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardMeta, CardHeader, CardDescription, CardContent, Icon, Image, Grid, GridRow, GridColumn, Segment, Container } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react'

function Cards() {
    const [cardImage, setCardImage] = useState('');
    const [cardName, setCardName] = useState('');
    //update card name after user searches for one
    const handleInputChange = (event) =>{
        setCardName(event.target.value)
    }
    //get data after user hits enter
    const handleKeyPress = (event) =>{
        if(event.key === 'Enter')
            fetchData()
    }

    useEffect(() => {
        fetchData();
    }, [cardName]);

    const fetchData = async () => {
        if (!cardName) return; 

        const options = {
            method: 'GET',
            url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${cardName}`,
            headers: {
                'X-RapidAPI-Key': 'e1a9d0659cmshaee8feb1104866dp14c3f6jsn75e876f6acba',
                'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
                'name': cardName
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            if (response.data.length > 0) {
                setCardImage(response.data[0].img);
            } else {
                setCardImage(''); 
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div style={{ paddingTop: 100, paddingBottom: 100 }}>
            <Container>
              <Input  fluid focus placeholder='Search...' 
                value = {cardName}
                onChange={handleInputChange}
                onKeyPress = {handleKeyPress}
              />
            </Container>
            <Grid centered>
                <GridRow>
                    <GridColumn width={8} style={{paddingLeft: 260}}>
                        <Segment style={{ background: 'none', border: 'none', boxShadow: 'none' }}>
                            <Card>
                                <Image src={cardImage} wrapped ui={false} />
                                <CardContent>
                                    <CardHeader>Daniel</CardHeader>
                                    <CardMeta>Joined in 2016</CardMeta>
                                    <CardDescription>
                                        Daniel is a comedian living in Nashville.
                                    </CardDescription>
                                </CardContent>
                                <CardContent extra>
                                    <a>
                                        <Icon name='user' />
                                        10 Friends
                                    </a>
                                </CardContent>
                            </Card>
                        </Segment>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    );
}

export default Cards;
