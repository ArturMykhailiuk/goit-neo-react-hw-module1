import PropTypes from "prop-types";
import style from "./FriendList.module.css";
function FriendListItem({ avatar, name, isOnline }) {
  const statusClass = isOnline ? "online" : "offline";

  return (
    <div className={style.friends__item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={style[statusClass]}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
