app.use((req, res, next) => {
    res.status(503).send('Site is currently down. check back soon!')
})