export default function Item({ user, className }) {
  const { email, name, createdAt } = user.fields;

  className = "subscribersList";

  return (
    <tr>
      <td className={`${className}--table__td`}>{email}</td>
      <td className={`${className}--table__td`}>{name}</td>
      <td className={`${className}--table__td`}>{createdAt}</td>
    </tr>
  )
}