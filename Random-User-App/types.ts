export interface User {
    login: {
        uuid: string;
    };

    name: {
        first: string;
        last: string;
    };

    location: {
        country: string;
        city: string;
        state: string;
    };

    picture: {
        large: string;
    };

    gender: string;
    email: string;
    phone: string;

    dob: {
        age: number;
    };

    nat: string;
}

export interface RandomUserResponse {
    results: User[];
}