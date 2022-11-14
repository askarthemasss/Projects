const Table = ({ props }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
        {props.map((e) => {
          return (
            <tr key={e.id}>
              <td>{e.first_name}</td>
              <td>{e.last_name}</td>
              <td>{e.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
