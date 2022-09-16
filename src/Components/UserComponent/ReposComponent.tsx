import "./style.scss"

const ReposComponent = (props: {data : any}) => {
    const {data} = props;
    return(
        <div>
            {Object.keys(data).map((key,index) => {
            return(
                <div key={index}>
                    <h1>User's Repositories</h1>
                   <span>{key}:</span>
                   <span>{data[key]}</span>                         
                </div>
                )
            })
        }                                               
        </div>
    ) 
}

export default ReposComponent

/* {Object.keys(data).map((key,index) => {
            return(
                <div key={index}>
                    <h1>User's Repositories</h1>
                   <span>{key}:</span>
                   <span>{data[key]}</span>                         
                </div>
                )
            })
        }*/