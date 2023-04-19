import { useState } from 'react'
import BookCreate from './components/BookCreate'

function App (){
    // It will display all books at a given time
    const [books, setBooks] = useState([])

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

    return <div>
        {books.length}
         <BookCreate onCreate={handleCreateBook} />
    </div>
}

export default App