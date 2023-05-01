import { useState, useEffect } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import axios from 'axios'

function App (){
    // It will display all books at a given time
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }

    useEffect(() =>{
        fetchBooks()
    },[])

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })
        console.log(response)
        const updatedBooks = books.map((book) => {
            if (book.id === id){
                return {...book, ...response.data }
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