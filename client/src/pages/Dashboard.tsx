import { getUserRole } from "../utils/auth-util"

const dashboard = () => {
    const role = getUserRole();
    return (
        <div>
            <h1>Dashboard</h1>
            {role === 'admin' && <p>Welcome, Admin!</p>}
            {role === 'instructor' && <p>Welcome, Instructor</p>}
            {role === 'student' && <p>Welcome, Student!</p>}
        </div>
    )
}

export default dashboard;