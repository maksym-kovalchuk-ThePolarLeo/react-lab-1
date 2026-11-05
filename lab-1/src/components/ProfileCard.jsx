import { useState } from 'react'

function ProfileCard({ name, group, technologies = [] }) {
  const [likes, setLikes] = useState(0)

  return (
    <article className="profile-card">
      <h2 className="profile-name">{name}</h2>
      <p className="profile-group">
        <strong>Група:</strong> {group}
      </p>

      <div className="profile-technologies">
        <h3>Технології, які я хочу опанувати в цьому курсі:</h3>
        <ul>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="like-button"
        onClick={() => setLikes((prevLikes) => prevLikes + 1)}
      >
        Подобається {likes}
      </button>
    </article>
  )
}

export default ProfileCard
