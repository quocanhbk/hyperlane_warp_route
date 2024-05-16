# HYPERLANE

### Commands

```bash
# REQUIRE NODE >= 20

# Install dependencies
yarn install

# Compile
npx hardhat compile

# Deploy Ather Token
npx hardhat deploy-ather-token --network sepolia --input ./deploy_input.json

# Deploy Vault
npx hardhat deploy-vault --network sepolia --input ./deploy_input.json
```

### Funki testnet Hyperlane contracts

```json
{
  "funkitestnet": {
    "staticMerkleRootMultisigIsmFactory": "0x78F7c14f6694F08bC12E0eA54cDD7638083399D5",
    "staticMessageIdMultisigIsmFactory": "0x73ED3b97b38792F9bA2a8CB7a2F648D1246764C0",
    "staticAggregationIsmFactory": "0x7D3B90e078cA2c9086E517bb1a7a5370990E3e11",
    "staticAggregationHookFactory": "0x1A9F931C135c22F85E0De1c1978e809Bc0A27C60",
    "domainRoutingIsmFactory": "0xB571a7A6039ED6D89654C76106882d53Eba9B162",
    "interchainSecurityModule": "0x6985b2957aFA170DE59D39817DD6f051AB8131d6",
    "domainRoutingIsm": "0x6985b2957aFA170DE59D39817DD6f051AB8131d6",
    "merkleTreeHook": "0x9DC6d610F224f62441aC972e49b8F1e0Bae20345",
    "protocolFee": "0x0D36b2a08B85782bf7F519519aaC36cF6FC71D34",
    "testRecipient": "0x3986F2283D577C4bDDADC1868EF967A476339cF4",
    "mailbox": "0x6c429312B711281ec1D58eb1e504b6c7b2Ff83C8",
    "proxyAdmin": "0x2EE4E7cD24ed96F949bD04d3f3C05dE188eb257d",
    "validatorAnnounce": "0xFC658335000F423d4A1F3E48f65432a1eF61287d"
  }
}
```
