import { NavLink } from 'react-router-dom';

const User = ({id, name, lastName, profilePic}) => {
  return (
    <div className="p-1 hover:bg-indigo-500">
      <NavLink exact to={"/dialogs/" + id} activeClassName="block bg-indigo-200 border">
        <figcaption class="font-thin flex flex-col items-start border p-1 hover:bg-indigo-300">
          <div class="p-1 border-2 border-light-blue-400 rounded-full bg-white">
            <img src={profilePic} alt="defaultProfilePic" class="w-10 h-10 rounded-full bg-light-blue-100"
              loading="lazy" />
          </div>
          <div class="text-gray-900">{name}</div>
          <div class="text-gray-900">{lastName}</div>
        </figcaption>
      </NavLink>
    </div>
  )
}

export default User;