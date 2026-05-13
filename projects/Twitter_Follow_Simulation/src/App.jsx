
import TwitterFollowCard from './TwitterFollowCard'
 const users = [
        {
           username : 'vasco',
           name: 'Vasco Martinez', 
           isFollowing: false
        },
        {
           username : 'theo',
           name: 'Theo Perez', 
           isFollowing: true
        },
        {
           username : 'kaoruko',
           name: 'Kaoruko Waguri', 
           isFollowing: true
        },
        {
           username : 'subaru',
           name: 'Subaru Natsuki', 
           isFollowing: true
        },

    ]
export default function App() {
    return (
        <section className='App'>

            <h2 className='App-title'>
                Who to follow
            </h2>

            {users.map(user => {
                const { username, name, isFollowing } = user

                return (
                    <TwitterFollowCard
                        key={username}
                        username={username}
                        name={name}
                        isFollowing={isFollowing}
                    />
                )
            })}

        </section>
    )
}
