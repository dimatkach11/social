import defaultProfilePic from '../../assets/images/default-profile.jpg'
import Description from './Description/Description';

const Profile = () => {
  return (
    <div className="">
      <div className="flex pt-10 items-start container mx-auto">
        <img className="max-h-64 pr-20 " src={defaultProfilePic} alt="profile"/>
        <Description />
      </div>
    </div>
  );
}

export default Profile;