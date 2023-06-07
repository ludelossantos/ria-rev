import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Header from '../componentes/base/Header';
import Buscador from '../componentes/listarLibros/Buscador';
import LibroCard from '../componentes/listarLibros/LibroCard';

const Home = () => {
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState("")

    const consumeApi = useCallback(async() => {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + search.replace(' ', '+'));
        const responseJson = await response.json();
        setBooks(responseJson?.items || []);
    }, [search]);

    useEffect(() => {
        if (search !== '') {
            consumeApi();
        }
    }, [search, consumeApi]);

    return (
        <div>
            <Header />
            <Buscador onBuscar={(s) => setSearch(s)} />
            <header className="App-header">
                <div className='content-cards'>
                    {
                        books.map(book => (
                            <Link to="/libro" key={book.id}>
                                <LibroCard book={book} />
                            </Link>
                        ))
                    }
                </div>
            </header>
        </div>
    )
};

export default Home;