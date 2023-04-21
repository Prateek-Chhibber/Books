import { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App (){
    // It will display all books at a given time
    const [books, setBooks] = useState([])

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        })
        setBooks(updatedBooks)
    } 

    const handleCreateBook = (title) => {
        const updatedBooks = [
            ...books,
            { 
                id: Math.round(Math.random() * 100),
                title 
            }
        ]
        setBooks(updatedBooks)
    }

    return <div className='app'>
        <BookList books={books} onDelete={deleteBookById} />
         <BookCreate onCreate={handleCreateBook} />
    </div>
}

export default App