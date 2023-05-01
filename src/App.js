import { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import axios from 'axios'

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

    const handleCreateBook = async (title) => {
      const response = await axios.post('http://localhost:3001/books',{
            title
        })
        console.log(response)
        const updatedBooks = [
            ...books,
            response.data
        ]
        setBooks(updatedBooks)
    }

    return (
    <div className='app'>
        <h1>Reading List</h1>
        <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
        <BookCreate onCreate={handleCreateBook} />
    </div>
    )
}

export default App