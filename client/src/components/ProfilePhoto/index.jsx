/// Imports ///
// svgs
import ProfilePhotoBackground from "../../svgs/ProfilePhotoBackground";
import ProfilePhotoBorder from "../../svgs/ProfilePhotoBorder";
// assets
import s from "./index.module.css";

/// Component ///
function ProfilePhoto({ device, theme }) {
  return (
    <div className={`${s.component} ${s[device]} ${s[theme]}`}>
      <div className={s.background}>
        <ProfilePhotoBackground />
      </div>
      <div className={s.border}>
        <ProfilePhotoBorder />
      </div>
      <img
        alt="Melody Ho"
        className={s.photo}
        src="/images/profile-photo.webp"
      />
    </div>
  );
}

export default ProfilePhoto;
