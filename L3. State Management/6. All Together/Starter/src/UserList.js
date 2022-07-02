import UserListItem from './UserListItem.js'

const UserList = ({users =[], showNumbers = true}) => (
  <div className="list-group list-group-flush border-bottom scrollarea">
  {(users.map(user => <UserListItem key={user.username} showNumbers={showNumbers} {...user} />))}
  </div>
)

export default UserList; 
