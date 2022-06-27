const UserListItem = ({username, firstName, lastName, playedGames =0}) => 
(
  <a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
    <div class="d-flex w-100 align-items-center justify-content-between">
      <strong class="mb-1">{username}</strong>
      <small>{playedGames}</small>
    </div>
    <div class="col-10 mb-1 small">{firstName}&nbsp;{lastName}</div>
  </a>
)

export default UserListItem;
