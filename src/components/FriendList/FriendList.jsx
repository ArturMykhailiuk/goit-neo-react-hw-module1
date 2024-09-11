import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import style from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={style.friends}>
      {friends.map((friend) => (
        <li className={style.friend__item_background} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
