import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardMeta, CardHeader, CardDescription, CardContent, Icon, Image, Grid, GridRow, GridColumn, Segment, Container } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';

function Cards() {
    const [cardImage, setCardImage] = useState('');
    const [cardName, setCardName] = useState('Fallout 4');
    const RAWG_API_KEY = '8a80155d1d44433ba1923df28dd3703f';


    const handleInputChange = (event) => {
        setCardName(event.target.value);
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            fetchData(); 
        }
    }

    useEffect(() => {
        fetchData();
    }, [cardName]);

    const fetchData = async () => {
        if (!cardName) return;
    
        const options = {
            method: 'GET',
            url: `https://api.rawg.io/api/games`,
            params: {
                key: RAWG_API_KEY,
                search: cardName
            }
        };
    
        try {
            const response = await axios.request(options);
            console.log(response.data);
            //extract data from response
            const image = response.data.results[0].background_image;
            setCardImage(image);
        } catch (error) {
            console.error('Error fetching data from RAWG:', error);
        }
    }



    return (
        <div style={{ paddingTop: 100, paddingBottom: 100 }}>
            <Container>
              <Input fluid focus placeholder='Search...' 
                value={cardName}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
            </Container>
            <Grid centered>
                <GridRow>
                    <GridColumn width={8} style={{ paddingLeft: 260 }}>
                        <Segment style={{ background: 'none', border: 'none', boxShadow: 'none' }}>
                            <Card>
                                <Image src={cardImage} wrapped ui={false} />
                                <CardContent>
                                    <CardHeader>Daniel</CardHeader>
                                    <CardMeta>Joined in 2016</CardMeta>
                                    <CardDescription>
                                      
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
