import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faMap, faUser } from '@fortawesome/fontawesome-free-solid'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useRouter } from 'next/router'
import { Helmet } from "react-helmet";
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

function Login({ textData, jsonData }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        let userDetails = {
            username: username.split(' ').join(''),
            password: password.split(' ').join('')
        }
        let userRequest = JSON.stringify(userDetails)
        const status = await fetch("../api/login", { method: "POST", body: userRequest })
        const responseStatus = await status.status
        if (responseStatus == 200) {
            const responseText = await status.json()
            const correctComponent = React.createElement("p", {
                style: {
                    color: 'green'
                }
            }, `Correct! Welcome, ${responseText.status}! Redirecting...`);
            ReactDOM.render(correctComponent, document.getElementById('statusOutput'));
            setTimeout(() => {
                window.location.replace('../profile')
            }, 500)
        } else {
            const incorrectComponent = React.createElement("p", {
                style: {
                    color: 'red'
                }
            }, "Incorrect");
            ReactDOM.render(incorrectComponent, document.getElementById('statusOutput'));
        }
    }
    const checkSession = async () => {
        if (textData === '{}') {
            class LoginTag extends React.Component {
                render() {
                    return <a href="./login" className="nav-link active"><FontAwesomeIcon icon={faHome} /> Login</a>
                }
            }
            ReactDOM.render(<LoginTag toWhat="Login" />, document.getElementById('username'));
        } else if (textData !== '{}') {
            window.location.assign('../profile')
        }
    }
    useEffect(() => checkSession())
    return (
        <div>
            <style jsx global>{`
    body {
        background: #303030};
    }
    `}</style>
            <title>Phoenix Servers Minecraft</title>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link href="./"><a className="nav-link"><FontAwesomeIcon icon={faHome} /> Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="./contact"><a className="nav-link"><FontAwesomeIcon icon={faEnvelope} /> Contact</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="./maps"><a className="nav-link"><FontAwesomeIcon icon={faMap} /> Minecraft Maps</a></Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <div id="username"></div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={styles.maindiv}>
                <form acceptCharset="utf8" onSubmit={handleSubmit}>
                    <div id="statusOutput"></div>
                    <div className={styles.loginForm}>
                        <ol>
                            <p>Sign in to start your session:</p>
                            <li>
                                <input placeholder="Username" type="text" id="username" name="username" required onChange={(e) => setUsername(e.target.value)} value={username} />
                            </li>
                            <li>
                                <input placeholder="Password" type="password" id="password" name="password" required style={{ secureEntryText: 'true' }} onChange={(e) => setPassword(e.target.value)} value={password} />
                            </li>
                            <li>
                                <Button style={{ marginTop: 10, marginLeft: 4 }} type="submit" variant="primary">Submit</Button>{' '}
                                <Button size="sm" style={{ marginTop: 10 }} variant="link"><a href="../create">Don't have an account?</a></Button>
                            </li>
                        </ol>
                    </div>
                </form>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const options = { headers: { cookie: context.req.headers.cookie } }
    const status = await fetch("http://localhost/api/user", options)
    const jsonData = await status.json()
    const textData = JSON.stringify(jsonData)
    return { props: { jsonData, textData } }
}

export default Login