import React, { useState } from "react";

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  const refreshNotifications = () => {
    setNotifications([
      {
        id: 1,
        message: "Uriah reacted to your post 👍",
      },
      {
        id: 2,
        message: "Lauren commented on your post 💬",
      },
      {
        id: 3,
        message: "Magnus created a new post 📝",
      },
    ]);
  };

  return (
    <div>
      <h2>Notifications</h2>

      <button
        className="button"
        onClick={refreshNotifications}
      >
        Refresh Notifications
      </button>

      <div className="notificationsList">
        {notifications.length === 0 ? (
          <p>No Notifications</p>
        ) : (
          notifications.map((notification) => (
            <div key={notification.id} className="post">
              {notification.message}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NotificationsPage;