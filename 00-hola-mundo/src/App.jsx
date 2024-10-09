import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";
import './App.css'
export function App () {
    //para pasar funciones como parametros
    //const formatUserName = (userName) => `@${userName}`
    const imageSrc0 = 'https://randomuser.me/api/portraits/thumb/men/1.jpg';    
    const imageSrc1 = 'https://randomuser.me/api/portraits/thumb/men/0.jpg';    
    //primera posicion variable del estado , segunda posicion variable del estado
    const [name, setName] = useState('jaoprogramador')

    const users = [
        {
          userName: 'zgoni',
          name: 'Zigor de Goñi',
          isFollowing: true, 
          avatar: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
        },
        {
          userName: 'abaysa',
          name: 'Alexey Baysa',
          isFollowing: false,
          avatar: 'https://randomuser.me/api/portraits/thumb/men/2.jpg'
        },
        {
          userName: 'jcasado',
          name: 'Jon Casado Bengoa',
          isFollowing: true,
          avatar: 'https://randomuser.me/api/portraits/thumb/men/3.jpg'
        },
        {
          userName: 'nWilliams',
          name: 'Nicolas Williams',
          isFollowing: false,
          avatar: 'https://randomuser.me/api/portraits/thumb/men/4.jpg'
        }
      ]
      

    //const [isFollowing, setIsFollowing]= useState(false)

    //console.log('render with name ', name )
    //console.log('App render with isFollowing ', isFollowing )
    return (
        
        <section className='App'>
            {
                users.map(user => {
                    const {userName, name, isFollowing, avatar} = user
                    return (
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName}
                            avatar={avatar}
                            initialIsFollowing={isFollowing}
                            >
                            {name}
                        </TwitterFollowCard>        
                    )
                })
            }
            
            
        </section>

    )
}