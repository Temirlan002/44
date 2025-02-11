import { useDispatch } from "react-redux";
import { fetchUsersAction } from "../../redux/actions/actions";


const UsersPage = () => {
    const dispatch = useDispatch()

    const getUsers = () => {
        dispatch(fetchUsersAction())
    }

    return (
        <div>
            <button onClick={getUsers}>get users</button>
        </div> 
    )
}


export default UsersPage;