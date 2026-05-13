import { useState } from "react"

export default function TwitterFollowCard({username, name}) {
    const imageSrc = `/Imagenes/${username}.jpg`
    const [isFollowing, setIsFollowing] = useState(false)
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    const text = isFollowing? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'
    console.log(isFollowing)
    return(
            <article className = 'tw-followCard'>
                <header className = 'tw-FollowCard-Header'>
                    <img
                     className='tw-FollowCard-avatar'
                     alt = "El avatar de Theo"  
                     src = {imageSrc}
                     />
                    <div className = 'tw-FollowCard-info'>
                        <strong>{name}</strong>
                        <span className = 'tw-followCard-infoUserName'>@{username}</span>
                    </div>
                </header>
                <aside>
                    <button className={buttonClassName} onClick={handleClick}>
                        <span className="tw-followCard-text">{text}</span>
                        <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                    </button>
                </aside>    
            </article>
        )
}