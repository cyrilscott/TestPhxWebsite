const User = require('../../model')
const mongoose = require('mongoose')
const argon2 = require('argon2')
const passport = require('passport')
import { withIronSession } from "next-iron-session";

export async function handler(req, res) {
    const user = req.session.get("user");
    res.send({ user });
}

export default withIronSession(handler, {
    password: "KWE2VFVVCH9b1HpwBgghRzuEoinCHy2sN5RR0GiV",
    cookieName: "PHXSession",
    // if your localhost is served on http:// then disable the secure flag
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
});