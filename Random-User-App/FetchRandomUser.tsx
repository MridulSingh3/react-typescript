import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import type { User, RandomUserResponse, } from "../types";

interface FetchRandomUserProps {
    url: string;
}
const FetchRandomUser = ({ url }: FetchRandomUserProps) => {
    const [Users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    const fetchUser = async (): Promise<void> => {
        try {
            setLoading(true);
            setError("");

            let response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }
            let data: RandomUserResponse = await response.json();
            console.log(data);

            setUsers(data.results);
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError("Something went wrong");
            }
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchUser();
    }, [url]);

    const viewDetails = (user: User): void => {
        navigate(`/view/${user.login.uuid}`, {
            state: {
                user: user
            }
        });
    };
    const nextUsers = (): void => {
        fetchUser();
    };
    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }
    return (
        <>
            {
                Users.map((user) => (
                    <div key={user.login.uuid}>
                        <div>
                            <div>
                                <img src={user.picture.large} alt={user.name.first} />
                            </div>
                            <div>
                                <h3>Name:<span>{user.name.first}{" "}{user.name.first}</span> </h3>

                                <h3>Country:<span>{user.location.country}</span></h3>
                            </div>
                            <button onClick={() => viewDetails(user)}>View Details</button>
                        </div>
                    </div>
                ))
            }
            <div>
                <button onClick={nextUsers}>Next</button>
            </div>
        </>
    )
}

export default FetchRandomUser
