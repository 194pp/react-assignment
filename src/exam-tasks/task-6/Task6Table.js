import classes from './Task6.module.css';

const Task6Table = ({data}) => {
  if (!data.length) {
    return <div>Loading...</div>
  }
  return (
    <table className={classes.Table}>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Company</th>
      </tr>
      {data.map(item => {
        return (
          <tr key={item.name}>
            <th>{item.name}</th>
            <th>{item.email}</th>
            <th>{`${item.address.street}, ${item.address.city}`}</th>
            <th>{item.phone}</th>
            <th>{item.company.name}</th>
          </tr>
        )
      })}
    </table>
  )
}

export default Task6Table;