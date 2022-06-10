//import UserItem from "./UserItem";
import Card from "../UI/Card";
import classes from './UserList.module.css'

const UserList = (props) => {
  return <Card className={classes.users}>
    <ul className="">
      {props.items.map((userInfo) => (
          <li key={userInfo.id}>
            {userInfo.username + ' (' + userInfo.age + ' years old)'}
          </li>
          /*          <UserItem
                        name={userInfo.username}
                        age={userInfo.age}
                        key={userInfo.id}/>*/
      ))
      }
    </ul>
  </Card>
}
export default UserList;