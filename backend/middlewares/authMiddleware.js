const jwt = require('jsonwebtoken');

module.exports.authMiddleware = async (req, res, next) => {
    const { accessToken } = req.cookies

    if (!accessToken) { // if token doesnt exist
        return res.status(401).json({ error: 'Please Login' }) // 401 unauthorized response status code indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.
    } else {
        try {
            const deCodeToken = await jwt.verify(accessToken, process.env.SECRET)
            req.role = deCodeToken.role
            req.id = deCodeToken.id
            next()
        } catch (error) {
            return res.status(401).json({ error: 'Please Login' })
        }
    }
}