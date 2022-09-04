const { connect, disconnect } = require('mongoose')
const express = require('express')
const { DuplicityError, NotFoundError, AuthError, FormatError} = require('./errors')
const { registerUser, authenticateUser, retrieveUser, createNote } = require('./logic')

const { sign, JsonWebTokenError, TokenExpiredError, NotBeforeError } = require('jsonwebtoken')
const { verifyToken, createLogger } = require('./utils')
const logger = createLogger(module) //arreglar

connect('mongodb://localhost:27017/postits-test')
    .then(() => {
        logger.info('db connected')
        const api = express()

        const jsonBodyParser = express.json()
        // ... const body = JSON.parse(json) -> req.body = body

        api.post('/api/users', jsonBodyParser, (req, res) => {
            try {
                const { body: { name, email, password } } = req

                // TODO check if user (email) already exists!

                registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof DuplicityError)
                            res.status(409).json({ error: error.message })
                        else
                            res.status(500).json({ error: 'system error' })

                        logger.error(error)

                        return
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof FormatError)
                    res.status(400).json({ error: error.message })
                else
                    res.status(500).json({ error: 'system error' })
                logger.error(error)
            }
        })

        api.post('/api/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { body: { email, password } } = req

                authenticateUser(email, password)
                    .then(userId => {
                        const token = sign({ sub: userId }, 'Dan: copié el código de Mónica!', {
                            expiresIn: '1h'
                        })
                        res.json({ token })
                    })
                    .catch(error => {
                        if (error instanceof NotFoundError || error instanceof AuthError)
                            res.status(401).json({ error: 'wrong credentials' })
                        else
                            res.status(500).json({ error: 'system error' })

                        logger.error(error)
                        return
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof FormatError)
                    res.status(400).json({ error: error.message })
                else
                    res.status(500).json({ error: 'system error' })

                logger.error(error)
            }
        })

        api.get('/api/users', (req, res) => {
            try {
                const userId = verifyToken(req)

                retrieveUser(userId)
                    .then(user => res.json(user))
                    .catch(error => {
                        if (error instanceof NotFoundError || error instanceof AuthError)
                            res.status(401).json({ error: 'wrong credentials' })
                        else
                            res.status(500).json({ error: 'system error' })

                        logger.error(error)

                        return
                    })

            } catch (error) {
                if (error instanceof TypeError || error instanceof FormatError)

                    res.status(400).json({ error: error.message })
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError || error instanceof NotBeforeError)
                    res.status(401).json({ error: 'token not valid' })
                else
                    res.status(500).json({ error: 'system error' })

                logger.error(error)
            }
        })

        api.post('/api/notes', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)
                const { body: { text } } = req;

                createNote(userId, text)
                    .then(() => res.status(201).send())
                    // .then(user => res.json(user))
                    .catch(error => {
                        if (error instanceof NotFoundError)
                            res.status(404).json({ error: error.message })
                        else
                            res.status(500).json({ error: 'system error' })

                        logger.error(error)
                        return
                    })

            } catch (error) {
                if (error instanceof TypeError || error instanceof FormatError)
                    res.status(400).json({ error: error.message })
                else if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError || error instanceof NotBeforeError)
                    res.status(401).json({ error: 'token not valid' })
                else
                    res.status(500).json({ error: 'system error' })

                logger.error(error)
            }
        })

        api.listen(8080, () => logger.info('api started'))

        process.on('SIGINT', () => {
            if (!process.stopped) {
                process.stopped = true

                logger.info('\n api stopped')

                disconnect()
                    .then(() => {
                        logger.info('db disconnected')

                        process.exit(0)
                    })
            }
        })
    })
    .catch(error => {
        console.error(error)
    })