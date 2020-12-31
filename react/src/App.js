import { useEffect, useState } from 'react'
import axios from 'axios'
import { booksQuery } from './QueriesGraph'
function App() {
  const [books, setBooks] = useState()
  useEffect(() => {
    const callAxiosGraph = async () => {
      const { data } = await axios.post('http://localhost:4000', booksQuery)

      setBooks(data?.data?.books)
    }
    callAxiosGraph()
      .then(r => console.log('Fetch Data Success'))
      .catch(e => console.error(e))
  }, [])

  let booksRender
  if (books && books.length > 0) {
    booksRender = books.map(book => {
      return <ul>{book.title}</ul>
    })
  }

  return (
    <div className="App">
      <li>{booksRender}</li>
    </div>
  )
}

export default App
