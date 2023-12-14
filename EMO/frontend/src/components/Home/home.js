import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
function Home(){
    const navigate = useNavigate();
    function onClickLogout(){
        navigate('/login')
    }
    return(
        <div className='text-center m-5'>
            <h1 className='m-3'>Welcome to Home Page </h1>
            <button className="btn btn-warning w-25 m-5" onClick={onClickLogout}>Logout</button>
        </div>
    )
}
export default Home