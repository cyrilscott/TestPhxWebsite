import { withIronSession } from "next-iron-session";

async function handler(req, res, session) {
    try {
        req.session.destroy();
        res.json({ status: 'ok' });
    } catch (err) {
        res.json({ status: err })
    }
}

export default withIronSession(handler, {
    password: "KWE2VFVVCH9b1HpwBgghRzuEoinCHy2sN5RR0GiV",
    cookieName: "PHXSession",
    // if your localhost is served on http:// then disable the secure flag
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
});