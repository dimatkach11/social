import User from './User';


const Users = ({users}) => {

  users = users.map((user, key) => <User 
    key={key}
    name={user.name}  
    lastName={user.lastName}  
    image={user.image} />
  )
  
  return (
    <div className="flex flex-wrap border-2 mt-4 p-1">

      {users}

    </div>
  );
}

export default Users;