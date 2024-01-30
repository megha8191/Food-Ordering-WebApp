import { useRouteError } from "react-router-dom";

const Error =()=>{
    return <h1>Error {useRouteError}</h1>
}
export default Error;