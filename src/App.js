import { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App (){
    // It will display all books at a given time
    const [books, setBooks] = useState([])

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id){
                return {...book, title: newTitle}
            }
            return book
        })
        setBooks(updatedBooks)
    }

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
        <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
         <BookCreate onCreate={handleCreateBook} />
    </div>
}

export default App