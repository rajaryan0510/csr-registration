import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import CulturalIMG from '../assets/cultural.jpg'

export default function Dashboard() {
    return (
        <div className='flex mx-[100px] ' >

        <Card className='pt-[150px] ml-[50px] ' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <img className='ml-[30px]  w-[280px] h-[140px] object-cover  ' src={CulturalIMG} alt='cutm'/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    cultural
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>

            <Card className='pt-[150px] ml-[50px] ' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <img className='ml-[30px]  w-[280px] h-[140px] object-cover  ' src={CulturalIMG} alt='cutm'/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Sport
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>

            <Card className='pt-[150px] ml-[50px] ' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <img className='ml-[30px]  w-[280px] h-[140px] object-cover  ' src={CulturalIMG} alt='cutm'/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Responsibility
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>

        </div>

        
        
        
    )
}