module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */
  networks: {
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: '*', // Any network (default: none)
    },
  },

  mocha: {
    timeout: 100000,
    useColors: true,
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.7.6',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
    vyper: {
      settings: {
        // evmVersion: 'istanbul', // EVM version to compile for. Can be byzantium, constantinople, petersburg or istanbul.
        // optional, whether or not optimizations are turned on
        // defaults to true
        optimize: true,
        // The following is used to select desired outputs based on file names.
        // File names are given as keys, a star as a file name matches all files.
        // Outputs can also follow the Solidity format where second level keys
        // denoting contract names - all 2nd level outputs are applied to the file.
        //
        // To select all possible compiler outputs: "outputSelection: { '*': ["*"] }"
        // Note that this might slow down the compilation process needlessly.
        //
        // The available output types are as follows:
        //
        //    abi - The contract ABI
        //    ast - Abstract syntax tree
        //    interface - Derived interface of the contract, in proper Vyper syntax
        //    ir - intermediate representation of the code
        //    userdoc - Natspec user documentation
        //    devdoc - Natspec developer documentation
        //    evm.bytecode.object - Bytecode object
        //    evm.bytecode.opcodes - Opcodes list
        //    evm.deployedBytecode.object - Deployed bytecode object
        //    evm.deployedBytecode.opcodes - Deployed opcodes list
        //    evm.deployedBytecode.sourceMap - Deployed source mapping (useful for debugging)
        //    evm.methodIdentifiers - The list of function hashes
        //
        // Using `evm`, `evm.bytecode`, etc. will select every target part of that output.
        // Additionally, `*` can be used as a wildcard to request everything.
        //
        outputSelection: {
          '*': ['evm.bytecode', 'abi'], // Enable the abi and bytecode outputs for every single contract
        },
      },
    },
  },

  plugins: ['solidity-coverage'],
};
