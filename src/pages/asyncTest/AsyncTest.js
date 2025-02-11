import { useDispatch } from "react-redux";
import { asyncFunctionAction } from "../../redux/actions/actions";


const AsyncTest = () => {

    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch(asyncFunctionAction())}>
            after 2 sec
        </button>
    )
}

export default AsyncTest;