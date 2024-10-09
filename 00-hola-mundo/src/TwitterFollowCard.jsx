import { useState } from 'react'
export function TwitterFollowCard ({userName, name, avatar, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const imageSrc = avatar;    
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'


    console.log('TwitterFollowCard render with userName ', userName )

    const handleClick = () => {
        setIsFollowing(!isFollowing)
      }
    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img className='tw-follow-card-avatar'
                    alt="imagen jao" src={imageSrc}>
                </img>
                <div className='tw-follow-card-info'>
                    <strong>{name}  </strong>
                    <span className='tw-followCard-infoUserName'>
                        {/*formatUserName(userName)*/}
                        @{userName}
                    </span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}