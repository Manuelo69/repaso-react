import "./App.css";
import { useState } from "react";
export function TwitterFollowCard({
  addAt,
  userName,
  name,
  isFollowin,
  children,
}) {
  const [isFollowing, SetIsFollowing] = useState(false);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button following"
    : "tw-followCard-button";
  const handleClick = () => {
    SetIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card header">
        <img src={`https://unavatar.io/${userName}`} alt="Avatar djMariio" />
        <div>
          <strong>{children}</strong>
          <span>{addAt(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
