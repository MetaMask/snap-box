const ganache = require('ganache');

require('dotenv').config({});

const options = {
  wallet: {
    mnemonic: process.env.MNEMONIC_PHRASE,
  },
  fork: {
    url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
  },
};
const server = ganache.server(options);
const PORT = 8545;

server.listen(PORT, async (err) => {
  if (err) throw err;

  console.log(`ganache listening on port ${PORT}...`);

  const provider = server.provider;
  const accounts = await provider.request({
    method: 'eth_accounts',
    params: [],
  });

  console.log(accounts);
});
