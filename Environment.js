import relay from 'relay-runtime'
import { graphcoolAPI } from './config'

const { Environment, Network, RecordSource, Store } = relay
const store = new Store(new RecordSource())
const network = Network.create((operation, variables) => fetch(graphcoolAPI, {
  method: 'POST',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  body: JSON.stringify({ variables, query: operation.text }),
}).then(response => response.json()))
const environment = new Environment({ network, store })

export default environment
