import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react';
import CulturalIMG from '../assets/cultural.jpg'
import SportsIMG from '../assets/sport.jpg'
import ResponsibilitiesIMG from '../assets/responsibility.jpg'

export default function Dashboard() {
    return (
        <div className='flex px-[100px] bg-yellow-300 ' >

        <Card className='my-[150px] mx-[50px] ' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <img className='m-[30px]  w-[280px] h-[140px] object-cover rounded-lg  ' src={CulturalIMG} alt='cutm'/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Cultural
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Work on CUTM students Newsletter, Wall Magazine, and Annual Magazine. Organising/Participating in dance, music or drama
                    events. Preparing in any event organised by the clubs under cultural activities.
                    Painting and Photography etc.......
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>

            <Card className='my-[150px] mx-[50px] ' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <img className='m-[30px]  w-[280px] h-[140px] object-cover rounded-lg ' src={SportsIMG} alt='cutm'/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Sport
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Participating in individual and team sports of the Institute. Taking part in Health club/ Ypga Club. Participating / 
                    organising any adventures activities. Organising a college marathon/other sporting event etc........ 
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>

            <Card className='my-[150px] mx-[50px] ' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <img className='m-[30px]  w-[280px] h-[140px] object-cover rounded-lg ' src={ResponsibilitiesIMG} alt='cutm'/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Responsibility
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Any activities which benefit the community or environment. Plantation inside or outside CUTM. Visiting and helping in 
                    hospitals or orphanages. Blood Donation Camps. Organising Health Check up Camps. Save environment from pollution Camps.
                    Educational camp for population control. Youth Red Cross activities. Fund raising for social/environmental projects etc......
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>

        </div>

        
        
        
    )
}