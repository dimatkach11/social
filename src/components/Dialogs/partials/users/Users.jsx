import defaultProfilePic from '../../../../assets/images/default-profile.jpg'
import User from './User';


const Users = () => {
  return (
    <div className="flex flex-wrap border-2 mt-4 p-1">

      <User id="1"  name="Dmytro"  lastName="Tkach"  profilePic={defaultProfilePic} />
      <User id="2"  name="Massimo"  lastName="Spinoza"  profilePic={defaultProfilePic} />
      
    </div>
  );
}

export default Users;