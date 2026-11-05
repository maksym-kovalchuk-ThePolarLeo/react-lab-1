export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={person.photo}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}
