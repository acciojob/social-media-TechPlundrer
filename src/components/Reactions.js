import React, { useState } from "react";

function Reactions() {
  const [counts, setCounts] = useState({
    thumbsUp: 0,
    hooray: 0,
    heart: 0,
    rocket: 0
  });

  return (
    <div>
      <button onClick={() => setCounts({...counts, thumbsUp: counts.thumbsUp + 1})}>
        👍 {counts.thumbsUp}
      </button>

      <button onClick={() => setCounts({...counts, hooray: counts.hooray + 1})}>
        🎉 {counts.hooray}
      </button>

      <button onClick={() => setCounts({...counts, heart: counts.heart + 1})}>
        ❤️ {counts.heart}
      </button>

      <button onClick={() => setCounts({...counts, rocket: counts.rocket + 1})}>
        🚀 {counts.rocket}
      </button>

      <button>
        👀 0
      </button>
    </div>
  );
}

export default Reactions;