import { useState } from 'react'

export function TwiterFollowCard ({ children, userName, initialIsFollowing }){ 
  // formatUserName iria en las props osea parametros
  //desestructuracion
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  console.log('[twitterFollowCard] render with userName: ', userName)

  const imageSrc = `https://unavatar.io/${userName}`
  // const userName = `@${userName}`
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-foto'
        src={imageSrc} alt="Foto de Manuel" />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{ userName }</span>
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