const redis = require('redis');

const TTL = 300;
const client = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});
client.on('error', (err) => {
  client.quit();
  throw (err);
});

module.exports = {
  get: async (key) => {
    let result;
    try {
      await client.connect();
      result = await client.get(key);
    } catch {
      return null;
    }
    await client.quit();
    try {
      return JSON.parse(result);
    } catch {
      return result;
    }
  },
  set: async (key, value, EX = TTL) => {
    try {
      await client.connect();
    } catch {
      return false;
    }
    if (typeof (value) === 'object') {
      await client.set(key, JSON.stringify(value));
    } else {
      await client.set(key, value, { EX });
    }
    await client.quit();
    return true;
  },
  delete: async (key) => {
    try {
      await client.connect();
    } catch {
      return false;
    }
    await client.del(key);
    await client.quit();
    return true;
  },
};
