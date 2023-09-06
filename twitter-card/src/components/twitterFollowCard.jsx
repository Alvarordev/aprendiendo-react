import { useState } from "react";

const TwitterFollowCard = ({ name, userName, initialFollowing }) => {
  const [following, setFollowing] = useState(initialFollowing);

  const handleClick = () => {
    setFollowing(!following);
  };

  let text = following ? "Siguiendo" : "Seguir"

  return (
    <main className="tw-followCard">
      <header className="tw-followCard-info">
        <img src={`https://unavatar.io/${userName}`} alt="user" />
        <div className="tw-followCard-names">
          <h2>{name}</h2>
          <span>@{userName}</span>
        </div>
      </header>
      <aside>
        <button
          onClick={handleClick}
          className={
            following
              ? "tw-followCard-button is-following"
              : "tw-followCard-button"
          }
        >
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </main>
  );
};

export default TwitterFollowCard;
