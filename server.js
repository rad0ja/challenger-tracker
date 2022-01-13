import Fastify from 'fastify'
import fetch from 'node-fetch'
import fastifyCors from 'fastify-cors'

const fastify = Fastify({
  logger: true
})
const PORT = 3000
const response = await fetch(`https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/${API_KEY}`)
const data = await response.json()

const response1 = await fetch(`https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/${API_KEY}`)
const data1 = await response1.json()

let rada = []

rada.push(data1[0], data[0])
console.log(rada)

fastify.register(fastifyCors)

fastify.get('/Burdas', function (request, reply) {
   reply.send(rada)
})
 
fastify.listen(PORT, function(err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})
