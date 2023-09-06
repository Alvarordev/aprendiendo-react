import './App.css'
import TwitterFollowCard from './components/twitterFollowCard'

function App() {

  const users= [
    {
      id:1,
      name: 'Alvaro Rodriguez',
      userName: 'alvarorodria',
      following: false
    },
    {
      id:2,
      name: 'Luis Aguilar',
      userName: 'leav201',
      following: true
    },
    {
      id:3,
      name: 'Gabriela Aguilar',
      userName: 'venangab',
      following: false
    }
  ]

  return (
    <section className='tw-mainCard'>
      <header>
        <h1>Who to follow</h1>
      </header>

      {users.map(({id, name, userName, following}) => (
        <TwitterFollowCard key={id} name={name} userName={userName} initialFollowing={following}/>
      ))}

      <footer className='tw-cardFooter'>
        <h3>Show more..</h3>
      </footer>

    </section>
  )
}

export default App
