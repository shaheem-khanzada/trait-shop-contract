# trait-shop-contract
This is a Solidity smart contract for a TraitShop, which is a decentralized application that enables users to buy traits for their NFT (non-fungible token) apes. The contract includes the following functionalities:

- The contract is licensed under the MIT license and uses Solidity version 0.8.19.
- The contract imports the OpenZeppelin Ownable and ReentrancyGuard libraries and the IERC20 and ApesTraitsInterface interfaces.
- The contract has a mapping of the Ether (ETH) balances of users and a mapping of the token balances of users, which is used to keep track of the balance of each user's whitelisted ERC20 tokens.
- The contract includes a whitelist of tokens that are allowed to be used for buying traits.
- The contract has an ApesTraitsInterface instance, which is used to call the mint function to mint the traits for the users.
- The contract has a secret address that is set in the constructor and can be updated by the owner using the setSecret function.
- The contract includes an event called TraitBought, which is emitted when a user buys a trait.
- The contract has two functions for buying traits, one for buying traits with Ether and the other for buying traits with an ERC20 token. Both functions take similar inputs, including the ID of the trait, the sponsor's address, the commission percentage, the quantity, the price, whether to buy the trait on-chain or off-chain, and a signature that is used for authentication.
- The contract includes a modifier that checks if the token used for buying the trait is whitelisted.
- The contract includes a function for withdrawing the ETH and ERC20 tokens from the contract.
- The contract includes two functions for getting the ETH and token balances of a user.
