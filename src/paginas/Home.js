import React, { useEffect, useState } from 'react';
import Header from '../componentes/base/Header';
import Buscador from '../componentes/listarLibros/Buscador';
import LibroCard from '../componentes/listarLibros/LibroCard';


const Home = () => {
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        if (search !== '') {
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + search.replace(' ', '+'))
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    setBooks(data?.items || [])
                })
        }
    }, [search])

    return (
        <div>
            <Header />
            <Buscador onBuscar={(s) => setSearch(s)} />
            <header className="App-header">
                <div className='content-cards'>
                    {
                        books.map(book => (
                            <LibroCard book={book} />
                        ))
                    }
                </div>
            </header>
        </div>
    )
};

export default Home;