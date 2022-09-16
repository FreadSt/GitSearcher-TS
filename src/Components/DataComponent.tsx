import { Link } from "react-router-dom";
import "./List.scss"

const DataComponent = (props: {data : any}) => {
    const {data} = props;
    return(
        <div>
        {!data || data.length  === 0 ? 
            <div className="alert-search">
                <span>Let's search users...</span>
            </div> :
                <Link to="/usepage">
                    <div className="data">
                            <img src={data.avatar_url}/>
                            <p>{data.login}</p>
                            <p>Repo#: {data.public_repos}</p>
                    </div>
                </Link>
        }
        </div>
    ) 
    /*
    
    return(
        <div>
            <div className="data">
                <img src={data.avatar_url}/>
                <p>{data.login}</p>
                <p>{data.repos_url}</p>
            </div>
            <a href={""}></a>
        </div>
    )    
} */
    
}

export default DataComponent