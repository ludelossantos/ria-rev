import React from 'react';
//import './LibroCard.css';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const LibroCard = ({ book }) => {

    const { volumeInfo } = book;

    return (
        <Card style={{ padding: '1rem' }}>
            <Link to={`/libro/${encodeURIComponent(volumeInfo.title)}`}>
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
            </Link>
        </Card>
    );
};

export default LibroCard;