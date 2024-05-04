import { useState } from 'react'
import './App.css'
import { TwiterFollowCard } from './TwiterFollowCard'
import './manu.jpg'

const users = [
  {
    userName: 'manuDev',
    name: 'Manuel Suarez',
    isFollowing: true
  },
  {
    userName: 'joseLito',
    name: 'Jose Roble',
    isFollowing: false
  },
  {
    userName: 'luis',
    name: 'luis roble',
    isFollowing: true
  },
  {
    userName: 'luisa',
    name: 'luisa catalina',
    isFollowing: false
  }
]
export function App(){
  const [state, setState] = useState(0)

  return (
    <section className='App'>
      {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return (
            <TwiterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwiterFollowCard>
          )
        })
      }
      <button onClick={() => setState(state + 1)}>count</button>
    </section>
  )
}