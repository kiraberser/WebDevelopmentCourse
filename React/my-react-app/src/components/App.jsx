import Header from './Header'
import '../css/App.css'
import Footer from './footer'
import notes from '../notes'
import Note from '../components/Note'

function App() {
  return (
    <div>
        <Header/>
        <div className='flex flex-row flex-wrap'>
            {notes.map(note => (
                <Note
                    key={note.key}
                    title={note.title}
                    description={note.content}
                />
            ))}
        </div>
        <Footer/>
    </div>
  )
}

export default App

