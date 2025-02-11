import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "../../redux/actions/actions";
import { useEffect } from "react";
import DogCard from "../../components/DogCard";


const Cats = () => {

    const { cats } = useSelector(state => state.catsReducer )
    const dispatch = useDispatch()

    const getCats = () => {
        dispatch(fetchCats())
    }

    useEffect(() => {
        getCats()
    }, [])

    return (
        <div style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
        }}>
            {cats.map((element) => 
                <DogCard
                    image={element.url}
                    title={element.id}
                />
            )}
        </div>        
    )
}

export default Cats;