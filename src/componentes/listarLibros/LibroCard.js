import React from 'react';
//import './LibroCard.css';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';


const LibroCard = ({ book }) => {

    const { volumeInfo } = book
    return (
        <Card style={{ padding: '1rem' }}>
            <CardMedia
                component="img"
                height="140"
                image={volumeInfo?.imageLinks?.thumbnail || ''}
                alt="Libro sin imagen"
            />
            <CardContent>
                <Box sx={{ mt: 2 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {volumeInfo.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {volumeInfo.authors}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default LibroCard;