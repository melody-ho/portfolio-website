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
        sizes="((min-width: 1000px) and (min-height: 600px)) 15vw, (min-aspect-ratio: 16/9) 25vw, 50vw"
        srcSet="/images/profile-photo/450.webp 450w, /images/profile-photo/675.webp 675w, /images/profile-photo/900.webp 900w, /images/profile-photo/1350.webp 1350w"
      />
    </div>
  );
}

export default ProfilePhoto;
