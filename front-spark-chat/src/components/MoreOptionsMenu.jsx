function MoreOptionsMenu() {
  return (
    <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg w-48">
      <ul className="menu">
        <li>
          <a>View Profile</a>
        </li>
        <li>
          <a>Mute Notifications</a>
        </li>
        <li>
          <a>Block User</a>
        </li>
        <li>
          <a className="text-error">Delete Chat</a>
        </li>
      </ul>
    </div>
  );
}

export default MoreOptionsMenu;
