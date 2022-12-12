const ganache = require('ganache');

require('dotenv').config({});

const options = {
  fork: process.env.INFURA_PROJECT_ID ? {url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`} : "mainnet",
};
if(process.env.MNEMONIC_PHRASE) { 
  options.wallet = { 
    mnemonic: process.env.MNEMONIC_PHRASE
  }; 
}
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

  if(!process.env.MNEMONIC_PHRASE) { 
    console.log("mnemonic used: "+provider.getOptions().wallet?.mnemonic); 
  }
});
