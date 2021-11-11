import { isLoggedInVar } from "../apollo";

function Home() {
    return (
        <dev>
            <h1>Home</h1>
            <button onClick={() => isLoggedInVar(false)}>Loginout in now!</button>
        </dev>
    )
}
export default Home;