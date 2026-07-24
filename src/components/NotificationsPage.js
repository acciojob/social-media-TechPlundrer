import React, { useState } from "react";

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  return (
    <div>
      <h2>Notifications</h2>

      <button className="button" onClick={() => {
        setNotifications(["New message", "New friend", "New alert"]);
      }}>
        Refresh Notifications
      </button>

      <section className="notificationsList">
        {notifications.map((n,i)=>(
          <div key={i}>{n}</div>
        ))}
      </section>
    </div>
  );
}

export default NotificationsPage;