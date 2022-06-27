import UserListItem from './UserListItem.js'

const UserList = ({users =[]}) => (
  <div className="list-group list-group-flush border-bottom scrollarea">
  {(users.map(user => <UserListItem key={user.username} {...user} />))}
  </div>
)

export default UserList; 
