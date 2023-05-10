import { Link, Navigate } from "react-router-dom"


const Error = () => {
  return (
    <div>

<h1>Error Page Not Found</h1>
<Link to="/login">Go Back to Home</Link>
<Navigate to="/login">Navigate Home</Navigate>
    </div>
  )
}
export default Error