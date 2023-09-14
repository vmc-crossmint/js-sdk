export const staking = {
  "address": "0x187e8770A9ad58a83b3A619ba9bb3629dA6E25B1",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_resolver",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "_keyTypes",
          "type": "uint256[]"
        },
        {
          "internalType": "enum ContractResolver.Env",
          "name": "_env",
          "type": "uint8"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ActiveValidatorsCannotLeave",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "stakingAddress",
          "type": "address"
        }
      ],
      "name": "CannotRejoinUntilNextEpochBecauseKicked",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "senderPubKey",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "receiverPubKey",
          "type": "uint256"
        }
      ],
      "name": "CannotReuseCommsKeys",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "CannotStakeZero",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "stakerAddress",
          "type": "address"
        }
      ],
      "name": "CannotVoteTwice",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "CannotWithdrawZero",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nodeAddress",
          "type": "address"
        }
      ],
      "name": "CouldNotMapNodeAddressToStakerAddress",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "enum Staking.States",
          "name": "state",
          "type": "uint8"
        }
      ],
      "name": "MustBeInActiveOrUnlockedOrPausedState",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "enum Staking.States",
          "name": "state",
          "type": "uint8"
        }
      ],
      "name": "MustBeInActiveOrUnlockedState",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "enum Staking.States",
          "name": "state",
          "type": "uint8"
        }
      ],
      "name": "MustBeInNextValidatorSetLockedOrReadyForNextEpochState",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "enum Staking.States",
          "name": "state",
          "type": "uint8"
        }
      ],
      "name": "MustBeInNextValidatorSetLockedState",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "enum Staking.States",
          "name": "state",
          "type": "uint8"
        }
      ],
      "name": "MustBeInReadyForNextEpochState",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "stakerAddress",
          "type": "address"
        }
      ],
      "name": "MustBeValidatorInNextEpochToKick",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "currentTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "epochEndTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timeout",
          "type": "uint256"
        }
      ],
      "name": "NotEnoughTimeElapsedForTimeoutSinceLastEpoch",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "currentTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "epochEndTime",
          "type": "uint256"
        }
      ],
      "name": "NotEnoughTimeElapsedSinceLastEpoch",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "validatorCount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minimumValidatorCount",
          "type": "uint256"
        }
      ],
      "name": "NotEnoughValidatorsInNextEpoch",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "currentReadyValidatorCount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "nextReadyValidatorCount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minimumValidatorCountToBeReady",
          "type": "uint256"
        }
      ],
      "name": "NotEnoughValidatorsReadyForNextEpoch",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "currentEpochNumber",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "receivedEpochNumber",
          "type": "uint256"
        }
      ],
      "name": "SignaledReadyForWrongEpochNumber",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "stakerAddress",
          "type": "address"
        }
      ],
      "name": "StakerNotPermitted",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "yourBalance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "requestedWithdrawlAmount",
          "type": "uint256"
        }
      ],
      "name": "TryingToWithdrawMoreThanStaked",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "validator",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "validatorsInNextEpoch",
          "type": "address[]"
        }
      ],
      "name": "ValidatorIsNotInNextEpoch",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newTokenRewardPerTokenPerEpoch",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newComplaintTolerance",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newComplaintIntervalSecs",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "newKeyTypes",
          "type": "uint256[]"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newMinimumValidatorCount",
          "type": "uint256"
        }
      ],
      "name": "ConfigSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newEpochEndTime",
          "type": "uint256"
        }
      ],
      "name": "EpochEndTimeSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newEpochLength",
          "type": "uint256"
        }
      ],
      "name": "EpochLengthSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newEpochTimeout",
          "type": "uint256"
        }
      ],
      "name": "EpochTimeoutSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reason",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newKickPenaltyPercent",
          "type": "uint256"
        }
      ],
      "name": "KickPenaltyPercentSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "epochNumber",
          "type": "uint256"
        }
      ],
      "name": "ReadyForNextEpoch",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Recovered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        }
      ],
      "name": "RequestToJoin",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        }
      ],
      "name": "RequestToLeave",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "newResolverContractAddress",
          "type": "address"
        }
      ],
      "name": "ResolverContractAddressSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newDuration",
          "type": "uint256"
        }
      ],
      "name": "RewardsDurationUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "newStakingTokenAddress",
          "type": "address"
        }
      ],
      "name": "StakingTokenSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "enum Staking.States",
          "name": "newState",
          "type": "uint8"
        }
      ],
      "name": "StateChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountBurned",
          "type": "uint256"
        }
      ],
      "name": "ValidatorKickedFromNextEpoch",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        }
      ],
      "name": "ValidatorRejoinedNextEpoch",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "reporter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "validatorStakerAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "reason",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "VotedToKickValidatorInNextEpoch",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "validatorStakerAddress",
          "type": "address"
        }
      ],
      "name": "adminKickValidatorInNextEpoch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "staker",
          "type": "address"
        }
      ],
      "name": "adminRejoinValidator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "validatorStakerAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amountToPenalize",
          "type": "uint256"
        }
      ],
      "name": "adminSlashValidator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "advanceEpoch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "config",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "tokenRewardPerTokenPerEpoch",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "complaintTolerance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "complaintIntervalSecs",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minimumValidatorCount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractResolver",
      "outputs": [
        {
          "internalType": "contract ContractResolver",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "countOfCurrentValidatorsReadyForNextEpoch",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "countOfNextValidatorsReadyForNextEpoch",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "currentValidatorCountForConsensus",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "env",
      "outputs": [
        {
          "internalType": "enum ContractResolver.Env",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "epoch",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "epochLength",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "number",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "retries",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timeout",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "exit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getKeyTypes",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getKickedValidators",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getReward",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getStakingBalancesAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTokenAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getValidatorsInCurrentEpoch",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getValidatorsInCurrentEpochLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getValidatorsInNextEpoch",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "addresses",
          "type": "address[]"
        }
      ],
      "name": "getValidatorsStructs",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint32",
              "name": "ip",
              "type": "uint32"
            },
            {
              "internalType": "uint128",
              "name": "ipv6",
              "type": "uint128"
            },
            {
              "internalType": "uint32",
              "name": "port",
              "type": "uint32"
            },
            {
              "internalType": "address",
              "name": "nodeAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "reward",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "senderPubKey",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "receiverPubKey",
              "type": "uint256"
            }
          ],
          "internalType": "struct Staking.Validator[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getValidatorsStructsInCurrentEpoch",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint32",
              "name": "ip",
              "type": "uint32"
            },
            {
              "internalType": "uint128",
              "name": "ipv6",
              "type": "uint128"
            },
            {
              "internalType": "uint32",
              "name": "port",
              "type": "uint32"
            },
            {
              "internalType": "address",
              "name": "nodeAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "reward",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "senderPubKey",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "receiverPubKey",
              "type": "uint256"
            }
          ],
          "internalType": "struct Staking.Validator[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getValidatorsStructsInNextEpoch",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint32",
              "name": "ip",
              "type": "uint32"
            },
            {
              "internalType": "uint128",
              "name": "ipv6",
              "type": "uint128"
            },
            {
              "internalType": "uint32",
              "name": "port",
              "type": "uint32"
            },
            {
              "internalType": "address",
              "name": "nodeAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "reward",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "senderPubKey",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "receiverPubKey",
              "type": "uint256"
            }
          ],
          "internalType": "struct Staking.Validator[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "epochNumber",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "validatorStakerAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "voterStakerAddress",
          "type": "address"
        }
      ],
      "name": "getVotingStatusToKickValidator",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isActiveValidator",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isActiveValidatorByNodeAddress",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isReadyForNextEpoch",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "kickPenaltyPercentByReason",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "validatorStakerAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "reason",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "kickValidatorInNextEpoch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lockValidatorsForNextEpoch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextValidatorCountForConsensus",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "nodeAddressToStakerAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "readyForNextEpoch",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "ip",
          "type": "uint32"
        },
        {
          "internalType": "uint128",
          "name": "ipv6",
          "type": "uint128"
        },
        {
          "internalType": "uint32",
          "name": "port",
          "type": "uint32"
        },
        {
          "internalType": "address",
          "name": "nodeAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "senderPubKey",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "receiverPubKey",
          "type": "uint256"
        }
      ],
      "name": "requestToJoin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "requestToLeave",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newTokenRewardPerTokenPerEpoch",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "newComplaintTolerance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "newComplaintIntervalSecs",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "newKeyTypes",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256",
          "name": "newMinimumValidatorCount",
          "type": "uint256"
        }
      ],
      "name": "setConfig",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newResolverAddress",
          "type": "address"
        }
      ],
      "name": "setContractResolver",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newEpochEndTime",
          "type": "uint256"
        }
      ],
      "name": "setEpochEndTime",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newEpochLength",
          "type": "uint256"
        }
      ],
      "name": "setEpochLength",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum Staking.States",
          "name": "newState",
          "type": "uint8"
        }
      ],
      "name": "setEpochState",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newEpochTimeout",
          "type": "uint256"
        }
      ],
      "name": "setEpochTimeout",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "ip",
          "type": "uint32"
        },
        {
          "internalType": "uint128",
          "name": "ipv6",
          "type": "uint128"
        },
        {
          "internalType": "uint32",
          "name": "port",
          "type": "uint32"
        },
        {
          "internalType": "address",
          "name": "nodeAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "senderPubKey",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "receiverPubKey",
          "type": "uint256"
        }
      ],
      "name": "setIpPortNodeAddressAndCommunicationPubKeys",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "reason",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "newKickPenaltyPercent",
          "type": "uint256"
        }
      ],
      "name": "setKickPenaltyPercent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "stakerAddress",
          "type": "address"
        }
      ],
      "name": "shouldKickValidator",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "epochNumber",
          "type": "uint256"
        }
      ],
      "name": "signalReadyForNextEpoch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "stake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint32",
          "name": "ip",
          "type": "uint32"
        },
        {
          "internalType": "uint128",
          "name": "ipv6",
          "type": "uint128"
        },
        {
          "internalType": "uint32",
          "name": "port",
          "type": "uint32"
        },
        {
          "internalType": "address",
          "name": "nodeAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "senderPubKey",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "receiverPubKey",
          "type": "uint256"
        }
      ],
      "name": "stakeAndJoin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "state",
      "outputs": [
        {
          "internalType": "enum Staking.States",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalStaked",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unlockValidatorsForNextEpoch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "usedCommsKeys",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "validators",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "ip",
          "type": "uint32"
        },
        {
          "internalType": "uint128",
          "name": "ipv6",
          "type": "uint128"
        },
        {
          "internalType": "uint32",
          "name": "port",
          "type": "uint32"
        },
        {
          "internalType": "address",
          "name": "nodeAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "senderPubKey",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "receiverPubKey",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "votesToKickValidatorsInNextEpoch",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "votes",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
}