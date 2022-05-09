const Followers = ({users}) => (
    <ul style={{backgroundColor: "lightgray"}}>
        {users.map(user => (
            <li key={user.id} style={{listStyleType: "none"}}>{user.name}</li>))}
    </ul>
)

export default Followers;
