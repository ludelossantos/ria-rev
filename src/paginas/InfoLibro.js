import React, { useEffect, useState, useCallback } from 'react';
import Header from '../componentes/base/Header';
import { Card, CardContent, CardMedia, Typography, Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import '../componentes/listarLibros/LibroCard.css'

const InfoLibro = () => {
    const [ Libro, setLibro] = useState({});
    const { titulo } = useParams();

    const consumeApi = useCallback(async() => {
        const formattedTitulo = encodeURIComponent(titulo);
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + formattedTitulo);
        const responseJson = await response.json();
        setLibro(responseJson?.items[0] || []);
    }, [titulo]);

    useEffect(() => {
        if (titulo !== '') {
            consumeApi();
        }
    }, [titulo, consumeApi]);

    console.log("imagen: ",Libro?.volumeInfo?.description);

    return (
        <div>
            <Header />
            <header className="App-header">
            <Box sx={{ my: 2 }}>
                <Card style={{ padding: '5rem', width: '75%', margin: '0 auto' }}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={10} md={8} lg={6}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={Libro?.volumeInfo?.imageLinks?.thumbnail || '/elisa-calvet-b-S3nUOqDmUvc-unsplash.jpg'}
                                alt="Libro sin imagen"
                            />
                        </Grid>
                        <Grid item xs={12} sm={10} md={8} lg={6}>
                            <CardContent>
                                <Box sx={{ mt: 2 }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {Libro?.volumeInfo?.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', fontSize: '20px' }}>
                                        {Libro?.volumeInfo?.authors?.join(', ')}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' , fontSize: '18px'}}>
                                        {Libro?.volumeInfo?.publisher}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: '18px'}}>
                                        {Libro?.volumeInfo?.publishedDate}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ overflow: 'auto', maxHeight: 'auto', fontSize: '16px' }}>
                                        {Libro?.volumeInfo?.description}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
            </header>
        </div>
    );
};

export default InfoLibro;