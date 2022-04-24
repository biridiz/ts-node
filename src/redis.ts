import { createClient, RedisClientType } from 'redis'

class Redis {
  private pubClient: RedisClientType

  constructor() {
      this.pubClient = createClient({ url: 'redis://redis:6379' })
      console.log("Redis client connected", this.pubClient)
      this.pubClient.on('error', (err) => console.log('Redis Client Error', err))
      this.testClient()
  }

  public async testClient (): Promise<void> {
    await this.pubClient.connect()
    await this.pubClient.set('key', 'value')
    const value = await this.pubClient.get('key')
    console.log('value cache redis', value)
  }
}

export default Redis