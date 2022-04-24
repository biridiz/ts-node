import App from './app'
import Redis from './redis'

new App().express.listen(3333)
new Redis()