

const NavMenu = () => {
  return (
    <div className="">
      <ul className="flex">
        <a href="">
          <li className="p-2 m-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md active:bg-green-700 focus:outline-none hover:bg-green-700">Profile</li>
        </a>
        <a href="">
          <li className="p-2 m-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md active:bg-green-700 focus:outline-none hover:bg-green-700">Messages</li>
        </a>
        <a href="">
          <li className="p-2 m-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md active:bg-green-700 focus:outline-none hover:bg-green-700">News</li>
        </a>
        <a href="">
          <li className="p-2 m-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md active:bg-green-700 focus:outline-none hover:bg-green-700">Music</li>
        </a>
        <a href="">
          <li className="p-2 m-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md active:bg-green-700 focus:outline-none hover:bg-green-700">Settings</li>
        </a>
      </ul>
    </div>
  );
}

export default NavMenu;