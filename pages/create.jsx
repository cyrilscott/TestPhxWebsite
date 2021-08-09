import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faMap, faUser } from '@fortawesome/fontawesome-free-solid'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'


function Login({ textData, jsonData }) {
    const checkSession = async () => {
        if (textData === '{}') {
            class LoginTag extends React.Component {
                render() {
                    return <a href="./login" className="nav-link"><FontAwesomeIcon icon={faUser} /> Login</a>
                }
            }
            ReactDOM.render(<LoginTag />, document.getElementById('username'));
        } else if (textData !== '{}') {
            const Username = jsonData.user.username
            class LoginTag extends React.Component {
                render() {
                    return <a href="./profile" className="nav-link"><FontAwesomeIcon icon={faUser} /> {this.props.toWhat}</a>
                }
            }
            ReactDOM.render(<LoginTag toWhat={Username} />, document.getElementById('username'));
        }
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [rePassword, setRePassword] = useState('')
    let userDetails = {
        username: username.split(' ').join(''),
        password: password.split(' ').join(''),
        email: email.split(' ').join('')
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password == rePassword) {
            let userRequest = JSON.stringify(userDetails)
            const status = await fetch("../api/create", { method: "POST", body: userRequest })
            const responseStatus = await status.status
            if (responseStatus == 200) {
                const responseText = await status.json()
                const correctComponent = React.createElement("p", {
                    style: {
                        color: 'green'
                    }
                }, `Success, your username is: ${responseText.status}`);
                ReactDOM.render(correctComponent, document.getElementById('statusOutput'));
            } else {
                const responseText = await status.json()
                const incorrectComponent = React.createElement("p", {
                    style: {
                        color: 'red'
                    }
                }, `Something went wrong: ${responseText.status}`);
                ReactDOM.render(incorrectComponent, document.getElementById('statusOutput'));
            }
        } else if (password !== rePassword) {
            const correctComponent = React.createElement("p", {
                style: {
                    color: 'red'
                }
            }, `Please make sure your passwords match!`);
            ReactDOM.render(correctComponent, document.getElementById('statusOutput'));
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
                <form action="" acceptCharset="utf8" onSubmit={handleSubmit}>
                    <div id="statusOutput"></div>
                    <div className={styles.loginForm}>
                        <ol>
                            <p>Sign up:</p>
                            <li>
                                <input placeholder="Username" type="username" id="username" name="username" maxLength="20" required onChange={(e) => setUsername(e.target.value)} value={username} />
                            </li>
                            <li>
                                <input placeholder="Email" type="email" id="email" name="email" minLength="5" maxLength="32" required onChange={(e) => setEmail(e.target.value)} value={email} />
                            </li>
                            <li>
                                <input placeholder="Password" type="password" id="password" name="password" minLength="5" required maxLength="32" onChange={(e) => setPassword(e.target.value)} value={password} />
                            </li>
                            <li>
                                <input placeholder="Re-Enter Password" type="password" id="password" name="password" minLength="5" required maxLength="32" onChange={(e) => setRePassword(e.target.value)} value={rePassword} />
                            </li>
                            <li>
                                <Button style={{ marginTop: 10, marginLeft: 4 }} type="submit" variant="primary">Submit</Button>{' '}
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