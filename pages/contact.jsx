import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faMap, faUser } from '@fortawesome/fontawesome-free-solid'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import Link from 'next/link'

function Contact({ textData, jsonData }) {
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
                            <Link href="./contact"><a className="nav-link active"><FontAwesomeIcon icon={faEnvelope} /> Contact</a></Link>
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
                <h1 style={{ fontSize: 72, marginTop: 15 }}>Contact:</h1>
                <p>Discord: HottoDoggu#6666</p>
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

export default Contact
