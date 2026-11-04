import ProfileCard from './components/ProfileCard'
import './App.css'

const studentProfile = {
  name: 'Максим',
  group: 'КН31',
  technologies: ['проєктування UI', 'налагодження UX', 'керувати станом'],
}

function App() {
  return (
    <main className="app-container">
      <h1>Картка «Про мене»</h1>
      <ProfileCard
        name={studentProfile.name}
        group={studentProfile.group}
        technologies={studentProfile.technologies}
      />
    </main>
  )
}

export default App
