import { Link } from "react-router-dom";
import "./style.scss"

const UserComponent = (props: {data : any}) => {
    const {data} = props;
    return(
        <div>
            <Link to="/usepage">
                <div className="user-data">
                    <div>
                        <img src={data.avatar_url}/>
                    </div>

                    <div>
                        <p>Name: {data.name}</p>
                        <p>Email: {data.email}</p>
                        <p>Location: {data.location}</p>
                        <p>Join Data: {data.created_at}</p>
                        <p>Followers: {data.followers}</p>
                        <p>Following : {data.following}</p>
                        <p>Bio : {data.bio}</p>
                    </div>
                </div>
            </Link>
        </div>
    ) 
}

export default UserComponent