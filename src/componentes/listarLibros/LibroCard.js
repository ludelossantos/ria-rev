import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import './LibroCard.css';

const LibroCard  = ({ book }) => {

    const { volumeInfo } = book;

    return (
        <Card className="card" style={{ padding: '1rem' }}>
            <Link to={`/libro/${encodeURIComponent(volumeInfo.title)}`}>
            <CardMedia
                component="img"
                height="140"
                image={volumeInfo?.imageLinks?.thumbnail || '/elisa-calvet-b-S3nUOqDmUvc-unsplash.jpg'}
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

LibroCard.propTypes = {
    book: PropTypes.object.isRequired
};

export default LibroCard;