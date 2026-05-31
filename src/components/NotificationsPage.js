import React, { useState } from "react";

function NotificationsPage() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="button"
        onClick={() => setShow(true)}
      >
        Refresh Notifications
      </button>

      <section className="notificationsList">
        {show && (
          <>
            <div>Notification 1</div>
            <div>Notification 2</div>
          </>
        )}
      </section>
    </>
  );
}

export default NotificationsPage;