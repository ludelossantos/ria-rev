import React, { useEffect, useState } from 'react';
import Header from '../componentes/base/Header';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const InfoLibro = () => {
    const [ Libro, setLibro] = useState({});
    const { titulo } = useParams();

    useEffect(() => {
        if (titulo !== '') {
            const formattedTitulo = encodeURIComponent(titulo);
    
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + formattedTitulo)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    setLibro(data?.items[0] || []);
                });
        }
    }, [titulo]);

    console.log("libro: ",Libro);

    return (
        <div>
            <Header />
            <header className="App-header">
                <Card style={{ padding: '5rem', width: '75%', margin: '0 auto' }}>
                    <CardContent>
                        <CardMedia
                            component="img"
                            height="140"
                            image={Libro?.imageLinks?.thumbnail || '/elisa-calvet-b-S3nUOqDmUvc-unsplash.jpg'}
                            alt="Libro sin imagen"
                        />
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
                            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '16px' }}>
                                {Libro?.volumeInfo?.description}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </header>
        </div>
    );
};

export default InfoLibro;