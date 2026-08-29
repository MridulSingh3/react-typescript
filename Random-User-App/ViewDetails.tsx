import { useLocation, useNavigate } from "react-router-dom";

import type { User } from "../types";

interface LocationState {
    user: User;
}

const ViewDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const user = (location.state as LocationState | null)?.user;

    if (!user) {
        return (
            <>
                <h2>User not found!</h2>

                <button onClick={() => navigate("/")}>
                    Go Back
                </button>
            </>
        );
    }

    return (
        <>
            <div>
                <button onClick={() => navigate(-1)}>
                    ← Back
                </button>

                <div>
                    <img
                        src={user.picture.large}
                        alt={`${user.name.first} ${user.name.last}`}
                    />

                    <h1>
                        {user.name.first} {user.name.last}
                    </h1>

                    <p>
                        <strong>Gender:</strong>{" "}
                        {user.gender}
                    </p>

                    <p>
                        <strong>Email:</strong>{" "}
                        {user.email}
                    </p>

                    <p>
                        <strong>Phone:</strong>{" "}
                        {user.phone}
                    </p>

                    <p>
                        <strong>Country:</strong>{" "}
                        {user.location.country}
                    </p>

                    <p>
                        <strong>City:</strong>{" "}
                        {user.location.city}
                    </p>

                    <p>
                        <strong>State:</strong>{" "}
                        {user.location.state}
                    </p>

                    <p>
                        <strong>Age:</strong>{" "}
                        {user.dob.age}
                    </p>

                    <p>
                        <strong>Nationality:</strong>{" "}
                        {user.nat}
                    </p>
                </div>
            </div>
        </>
    );
};

export default ViewDetails;