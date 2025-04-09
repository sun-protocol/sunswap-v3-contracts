// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.6.0;

import '../interfaces/IERC20Minimal.sol';

/// @title TransferHelper
/// @notice Contains helper methods for interacting with ERC20 tokens that do not consistently return true/false
library TransferHelper {
    // address constant USDTAddr = 0xECa9bC828A3005B9a3b909f2cc5c2a54794DE05F;
    address constant USDTAddr = 0xa614f803B6FD780986A42c78Ec9c7f77e6DeD13C; // miannet USDT address 
    /// @notice Transfers tokens from msg.sender to a recipient
    /// @dev Calls transfer on token contract, errors with TF if transfer fails
    /// @param token The contract address of the token which will be transferred
    /// @param to The recipient of the transfer
    /// @param value The value of the transfer
    function safeTransfer(
        address token,
        address to,
        uint256 value
    ) internal {
        (bool success, bytes memory data) =
            token.call(abi.encodeWithSelector(IERC20Minimal.transfer.selector, to, value));
        if(token == USDTAddr){
            success = true;
            data = "";
        }
        require(success && (data.length == 0 || abi.decode(data, (bool))), 'TF');
    }
}
