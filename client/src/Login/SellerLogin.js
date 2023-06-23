import React, {useState, useContext} from "react"
import { LoginContext } from "../App"
function SellerLogin () {
    const setLogin = useContext(LoginContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/sellerLogin", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password}),
        }).then((r)=> {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user)=> setLogin(user))
            }
            else {
                console.log("didnt work")
            }
        })
    }
    return (
        <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />
            <br/>
            <button className = "loginButton" type="submit" name="submit" value="Login">
                {isLoading ? "Loading..." : "Login"}
            </button>
        </form>
</div>
    )
}

export default SellerLogin