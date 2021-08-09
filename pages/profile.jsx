import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faMap, faUser } from '@fortawesome/fontawesome-free-solid'
import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

function Profile({ textData, jsonData }) {
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
                    return <a href="./profile" className="nav-link active"><FontAwesomeIcon icon={faUser} /> {this.props.toWhat}</a>
                }
            }
            ReactDOM.render(<LoginTag toWhat={Username} />, document.getElementById('username'));
        }
    }
    const quickCheck = async () => {
        if (textData === '{}') {
            window.location.replace('../login')
        } else {
            const statusRawJson = jsonData
            let data = await {
                username: statusRawJson.user.username,
                id: statusRawJson.user.id,
                dateCreated: statusRawJson.user.dateCreated,
                email: statusRawJson.user.email
            }
            class UserData extends React.Component {
                render() {
                    return (
                        <div>
                            <p>Username: {data.username.toString()}</p>
                            <p>Email: {data.email.toString()}</p>
                            <p>User Id: {data.id.toString()}</p>
                            <p>Date Created: {data.dateCreated.toString()}</p>
                        </div>
                    )
                }
            }
            ReactDOM.render(<UserData />, document.getElementById('userData'))
        }
    }
    const handleSubmit = async () => {
        if (confirm('Are you sure you want to logout?')) {
            const status = await fetch("../api/logout", { method: "GET" })
            const statusString = JSON.stringify(await status.json())
            const statusJson = await JSON.parse(statusString)
            if (statusJson.status !== 'ok') {
                class LogoutTag extends React.Component {
                    render() {
                        return <h2 style={{ color: 'red' }}>An error has occured! {statusJson.status}</h2>
                    }
                }
                ReactDOM.render(<LogoutTag />, document.getElementById('logoutStatus'));
            } else if (statusJson.status == 'ok') {
                class LogoutTag extends React.Component {
                    render() {
                        return <h2 style={{ color: 'green' }}>Logged out! Redirecting...</h2>
                    }
                }
                ReactDOM.render(<LogoutTag />, document.getElementById('logoutStatus'));
                setTimeout(() => {
                    window.location.replace('../')
                }, 1000)
            }
        } else {
            return
        }
    }
    useEffect(() => {
        quickCheck()
        checkSession()
    })
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
                <h1 style={{ fontSize: 72, marginTop: 15 }}>Profile</h1>
                <div id='logoutStatus'></div>
                <div id='userData'></div>
                <Button onClick={handleSubmit} variant="danger">Logout</Button>
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

export default Profile
