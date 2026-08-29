import FetchRandomUser from "./FetchRandomUser"

interface RandomUserProps {
    url: string;
}
const RandomUser = ({ url }: RandomUserProps) => {
    return (
        <div>
            <h1>Random User Api</h1>
            <FetchRandomUser url={url} />
        </div>
    )
}

export default RandomUser
