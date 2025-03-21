const UserListItem = ({username, firstName, lastName, playedGames =0, showNumbers =true}) => 
{
  const playedGamesMessage = () => showNumbers ? `${username} played ${playedGames} games` :
    `${username} played * games`;
  return (
      <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">{username}</strong>
          <small>{playedGamesMessage()}</small>
        </div>
        <div className="col-10 mb-1 small">{firstName}&nbsp;{lastName}</div>
      </a>
    )
}


export default UserListItem;
