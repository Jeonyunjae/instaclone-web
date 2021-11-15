import { isLoggedInVar, logUserOut } from "../apollo";

function Home() {
    return (
        <dev>
            <h1>Welcom we did it!</h1>
            <button onClick={() => logUserOut()}>Loginout in now!</button>
        </dev>
    )
}
export default Home;