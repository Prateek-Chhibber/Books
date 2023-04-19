import { useState } from 'react'
import BookCreate from './components/BookCreate'

function App (){
    // It will display all books at a given time
    const [books, setBooks] = useState([])

    const handleCreateBook = (title) => {
        console.log('Need to add book with:',title)
    }
    
    return <div>
         <BookCreate onCreate={handleCreateBook} />
    </div>
}

export default App