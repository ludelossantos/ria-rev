import React, { useEffect, useState } from 'react';
import Header from '../componentes/base/Header';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const InfoLibro = () => {
    const [ Libro, setLibro] = useState({});
    const { titulo } = useParams();

    useEffect(() => {
        if (titulo !== '') {
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + titulo.replace(' ', '+'))
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    setLibro(data?.items[0] || [])
                })
        }
    }, [titulo])

    return (
        <div>
            <Header />
            <header className="App-header">
                <Card style={{ padding: '1rem' }}>
                    <CardContent>
                        <CardMedia
                            component="img"
                            height="140"
                            image={Libro?.imageLinks?.thumbnail || ''}
                            alt="Libro sin imagen"
                        />
                        <Box sx={{ mt: 2 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {Libro.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {Libro.authors}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {Libro.publisher}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {Libro.publishedDate}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {Libro.description}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </header>
        </div>
    );
};

export default InfoLibro;