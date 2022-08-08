/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface DopexVotingEscrowRewardsInterface extends utils.Interface {
  functions: {
    'PRICE_PRECISION()': FunctionFragment;
    'checkpoint()': FunctionFragment;
    'checkpointOtherUser(address)': FunctionFragment;
    'earned(address)': FunctionFragment;
    'eligibleCurrentVeDPX(address)': FunctionFragment;
    'emittedToken()': FunctionFragment;
    'fractionParticipating()': FunctionFragment;
    'getYield()': FunctionFragment;
    'getYieldForDuration()': FunctionFragment;
    'greylist(address)': FunctionFragment;
    'greylistAddress(address)': FunctionFragment;
    'lastTimeYieldApplicable()': FunctionFragment;
    'lastUpdateTime()': FunctionFragment;
    'notifyRewardAmount(uint256)': FunctionFragment;
    'owner()': FunctionFragment;
    'periodFinish()': FunctionFragment;
    'recoverERC20(address,uint256)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'reward_notifiers(address)': FunctionFragment;
    'setPauses(bool)': FunctionFragment;
    'setYieldDuration(uint256)': FunctionFragment;
    'setYieldRate(uint256,bool)': FunctionFragment;
    'sync()': FunctionFragment;
    'toggleRewardNotifier(address)': FunctionFragment;
    'totalVeDPXParticipating()': FunctionFragment;
    'totalVeDPXSupplyStored()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'userIsInitialized(address)': FunctionFragment;
    'userVeDPXCheckpointed(address)': FunctionFragment;
    'userVeDPXEndpointCheckpointed(address)': FunctionFragment;
    'userYieldPerTokenPaid(address)': FunctionFragment;
    'veDPX()': FunctionFragment;
    'yieldCollectionPaused()': FunctionFragment;
    'yieldDuration()': FunctionFragment;
    'yieldPerVeDPX()': FunctionFragment;
    'yieldPerVeDPXStored()': FunctionFragment;
    'yieldRate()': FunctionFragment;
    'yields(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'PRICE_PRECISION'
      | 'checkpoint'
      | 'checkpointOtherUser'
      | 'earned'
      | 'eligibleCurrentVeDPX'
      | 'emittedToken'
      | 'fractionParticipating'
      | 'getYield'
      | 'getYieldForDuration'
      | 'greylist'
      | 'greylistAddress'
      | 'lastTimeYieldApplicable'
      | 'lastUpdateTime'
      | 'notifyRewardAmount'
      | 'owner'
      | 'periodFinish'
      | 'recoverERC20'
      | 'renounceOwnership'
      | 'reward_notifiers'
      | 'setPauses'
      | 'setYieldDuration'
      | 'setYieldRate'
      | 'sync'
      | 'toggleRewardNotifier'
      | 'totalVeDPXParticipating'
      | 'totalVeDPXSupplyStored'
      | 'transferOwnership'
      | 'userIsInitialized'
      | 'userVeDPXCheckpointed'
      | 'userVeDPXEndpointCheckpointed'
      | 'userYieldPerTokenPaid'
      | 'veDPX'
      | 'yieldCollectionPaused'
      | 'yieldDuration'
      | 'yieldPerVeDPX'
      | 'yieldPerVeDPXStored'
      | 'yieldRate'
      | 'yields',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'PRICE_PRECISION', values?: undefined): string;
  encodeFunctionData(functionFragment: 'checkpoint', values?: undefined): string;
  encodeFunctionData(functionFragment: 'checkpointOtherUser', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'earned', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'eligibleCurrentVeDPX', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'emittedToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'fractionParticipating', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getYield', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getYieldForDuration', values?: undefined): string;
  encodeFunctionData(functionFragment: 'greylist', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'greylistAddress', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'lastTimeYieldApplicable', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastUpdateTime', values?: undefined): string;
  encodeFunctionData(functionFragment: 'notifyRewardAmount', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'periodFinish', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'recoverERC20',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'reward_notifiers', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setPauses', values: [PromiseOrValue<boolean>]): string;
  encodeFunctionData(functionFragment: 'setYieldDuration', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'setYieldRate',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(functionFragment: 'sync', values?: undefined): string;
  encodeFunctionData(functionFragment: 'toggleRewardNotifier', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'totalVeDPXParticipating', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalVeDPXSupplyStored', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'userIsInitialized', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'userVeDPXCheckpointed', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'userVeDPXEndpointCheckpointed', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'userYieldPerTokenPaid', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'veDPX', values?: undefined): string;
  encodeFunctionData(functionFragment: 'yieldCollectionPaused', values?: undefined): string;
  encodeFunctionData(functionFragment: 'yieldDuration', values?: undefined): string;
  encodeFunctionData(functionFragment: 'yieldPerVeDPX', values?: undefined): string;
  encodeFunctionData(functionFragment: 'yieldPerVeDPXStored', values?: undefined): string;
  encodeFunctionData(functionFragment: 'yieldRate', values?: undefined): string;
  encodeFunctionData(functionFragment: 'yields', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'PRICE_PRECISION', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'checkpoint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'checkpointOtherUser', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'earned', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'eligibleCurrentVeDPX', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emittedToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'fractionParticipating', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getYield', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getYieldForDuration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'greylist', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'greylistAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastTimeYieldApplicable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastUpdateTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'notifyRewardAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'periodFinish', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'recoverERC20', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'reward_notifiers', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPauses', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setYieldDuration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setYieldRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sync', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'toggleRewardNotifier', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalVeDPXParticipating', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalVeDPXSupplyStored', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userIsInitialized', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userVeDPXCheckpointed', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userVeDPXEndpointCheckpointed', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userYieldPerTokenPaid', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'veDPX', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'yieldCollectionPaused', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'yieldDuration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'yieldPerVeDPX', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'yieldPerVeDPXStored', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'yieldRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'yields', data: BytesLike): Result;

  events: {
    'OwnershipTransferred(address,address)': EventFragment;
    'RecoveredERC20(address,uint256)': EventFragment;
    'RewardAdded(uint256,uint256)': EventFragment;
    'YieldCollected(address,uint256)': EventFragment;
    'YieldDurationUpdated(uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RecoveredERC20'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'YieldCollected'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'YieldDurationUpdated'): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface RecoveredERC20EventObject {
  token: string;
  amount: BigNumber;
}
export type RecoveredERC20Event = TypedEvent<[string, BigNumber], RecoveredERC20EventObject>;

export type RecoveredERC20EventFilter = TypedEventFilter<RecoveredERC20Event>;

export interface RewardAddedEventObject {
  reward: BigNumber;
  yieldRate: BigNumber;
}
export type RewardAddedEvent = TypedEvent<[BigNumber, BigNumber], RewardAddedEventObject>;

export type RewardAddedEventFilter = TypedEventFilter<RewardAddedEvent>;

export interface YieldCollectedEventObject {
  user: string;
  yield: BigNumber;
}
export type YieldCollectedEvent = TypedEvent<[string, BigNumber], YieldCollectedEventObject>;

export type YieldCollectedEventFilter = TypedEventFilter<YieldCollectedEvent>;

export interface YieldDurationUpdatedEventObject {
  newDuration: BigNumber;
}
export type YieldDurationUpdatedEvent = TypedEvent<[BigNumber], YieldDurationUpdatedEventObject>;

export type YieldDurationUpdatedEventFilter = TypedEventFilter<YieldDurationUpdatedEvent>;

export interface DopexVotingEscrowRewards extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DopexVotingEscrowRewardsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    PRICE_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    checkpoint(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    checkpointOtherUser(
      user_addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    eligibleCurrentVeDPX(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & {
        eligible_vedpx_bal: BigNumber;
        stored_ending_timestamp: BigNumber;
      }
    >;

    emittedToken(overrides?: CallOverrides): Promise<[string]>;

    fractionParticipating(overrides?: CallOverrides): Promise<[BigNumber]>;

    getYield(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    getYieldForDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    greylist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    greylistAddress(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    lastTimeYieldApplicable(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    notifyRewardAmount(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    periodFinish(overrides?: CallOverrides): Promise<[BigNumber]>;

    recoverERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    reward_notifiers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    setPauses(
      _yieldCollectionPaused: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setYieldDuration(
      _yieldDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setYieldRate(
      _new_rate0: PromiseOrValue<BigNumberish>,
      sync_too: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    sync(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    toggleRewardNotifier(
      notifier_addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    totalVeDPXParticipating(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalVeDPXSupplyStored(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    userIsInitialized(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    userVeDPXCheckpointed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    userVeDPXEndpointCheckpointed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    userYieldPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    veDPX(overrides?: CallOverrides): Promise<[string]>;

    yieldCollectionPaused(overrides?: CallOverrides): Promise<[boolean]>;

    yieldDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    yieldPerVeDPX(overrides?: CallOverrides): Promise<[BigNumber]>;

    yieldPerVeDPXStored(overrides?: CallOverrides): Promise<[BigNumber]>;

    yieldRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    yields(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  checkpoint(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  checkpointOtherUser(
    user_addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  eligibleCurrentVeDPX(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber] & {
      eligible_vedpx_bal: BigNumber;
      stored_ending_timestamp: BigNumber;
    }
  >;

  emittedToken(overrides?: CallOverrides): Promise<string>;

  fractionParticipating(overrides?: CallOverrides): Promise<BigNumber>;

  getYield(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  getYieldForDuration(overrides?: CallOverrides): Promise<BigNumber>;

  greylist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  greylistAddress(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  lastTimeYieldApplicable(overrides?: CallOverrides): Promise<BigNumber>;

  lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

  notifyRewardAmount(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

  recoverERC20(
    tokenAddress: PromiseOrValue<string>,
    tokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  reward_notifiers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  setPauses(
    _yieldCollectionPaused: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setYieldDuration(
    _yieldDuration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setYieldRate(
    _new_rate0: PromiseOrValue<BigNumberish>,
    sync_too: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  sync(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  toggleRewardNotifier(
    notifier_addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  totalVeDPXParticipating(overrides?: CallOverrides): Promise<BigNumber>;

  totalVeDPXSupplyStored(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  userIsInitialized(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  userVeDPXCheckpointed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  userVeDPXEndpointCheckpointed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  userYieldPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  veDPX(overrides?: CallOverrides): Promise<string>;

  yieldCollectionPaused(overrides?: CallOverrides): Promise<boolean>;

  yieldDuration(overrides?: CallOverrides): Promise<BigNumber>;

  yieldPerVeDPX(overrides?: CallOverrides): Promise<BigNumber>;

  yieldPerVeDPXStored(overrides?: CallOverrides): Promise<BigNumber>;

  yieldRate(overrides?: CallOverrides): Promise<BigNumber>;

  yields(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    checkpoint(overrides?: CallOverrides): Promise<void>;

    checkpointOtherUser(user_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    eligibleCurrentVeDPX(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & {
        eligible_vedpx_bal: BigNumber;
        stored_ending_timestamp: BigNumber;
      }
    >;

    emittedToken(overrides?: CallOverrides): Promise<string>;

    fractionParticipating(overrides?: CallOverrides): Promise<BigNumber>;

    getYield(overrides?: CallOverrides): Promise<BigNumber>;

    getYieldForDuration(overrides?: CallOverrides): Promise<BigNumber>;

    greylist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    greylistAddress(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    lastTimeYieldApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    recoverERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    reward_notifiers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    setPauses(_yieldCollectionPaused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;

    setYieldDuration(_yieldDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    setYieldRate(
      _new_rate0: PromiseOrValue<BigNumberish>,
      sync_too: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    sync(overrides?: CallOverrides): Promise<void>;

    toggleRewardNotifier(notifier_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    totalVeDPXParticipating(overrides?: CallOverrides): Promise<BigNumber>;

    totalVeDPXSupplyStored(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    userIsInitialized(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    userVeDPXCheckpointed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    userVeDPXEndpointCheckpointed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    userYieldPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    veDPX(overrides?: CallOverrides): Promise<string>;

    yieldCollectionPaused(overrides?: CallOverrides): Promise<boolean>;

    yieldDuration(overrides?: CallOverrides): Promise<BigNumber>;

    yieldPerVeDPX(overrides?: CallOverrides): Promise<BigNumber>;

    yieldPerVeDPXStored(overrides?: CallOverrides): Promise<BigNumber>;

    yieldRate(overrides?: CallOverrides): Promise<BigNumber>;

    yields(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;

    'RecoveredERC20(address,uint256)'(token?: null, amount?: null): RecoveredERC20EventFilter;
    RecoveredERC20(token?: null, amount?: null): RecoveredERC20EventFilter;

    'RewardAdded(uint256,uint256)'(reward?: null, yieldRate?: null): RewardAddedEventFilter;
    RewardAdded(reward?: null, yieldRate?: null): RewardAddedEventFilter;

    'YieldCollected(address,uint256)'(user?: PromiseOrValue<string> | null, _yield?: null): YieldCollectedEventFilter;
    YieldCollected(user?: PromiseOrValue<string> | null, _yield?: null): YieldCollectedEventFilter;

    'YieldDurationUpdated(uint256)'(newDuration?: null): YieldDurationUpdatedEventFilter;
    YieldDurationUpdated(newDuration?: null): YieldDurationUpdatedEventFilter;
  };

  estimateGas: {
    PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    checkpoint(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    checkpointOtherUser(
      user_addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    eligibleCurrentVeDPX(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    emittedToken(overrides?: CallOverrides): Promise<BigNumber>;

    fractionParticipating(overrides?: CallOverrides): Promise<BigNumber>;

    getYield(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    getYieldForDuration(overrides?: CallOverrides): Promise<BigNumber>;

    greylist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    greylistAddress(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    lastTimeYieldApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    recoverERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    reward_notifiers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    setPauses(
      _yieldCollectionPaused: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setYieldDuration(
      _yieldDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setYieldRate(
      _new_rate0: PromiseOrValue<BigNumberish>,
      sync_too: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    sync(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    toggleRewardNotifier(
      notifier_addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    totalVeDPXParticipating(overrides?: CallOverrides): Promise<BigNumber>;

    totalVeDPXSupplyStored(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    userIsInitialized(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    userVeDPXCheckpointed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    userVeDPXEndpointCheckpointed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    userYieldPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    veDPX(overrides?: CallOverrides): Promise<BigNumber>;

    yieldCollectionPaused(overrides?: CallOverrides): Promise<BigNumber>;

    yieldDuration(overrides?: CallOverrides): Promise<BigNumber>;

    yieldPerVeDPX(overrides?: CallOverrides): Promise<BigNumber>;

    yieldPerVeDPXStored(overrides?: CallOverrides): Promise<BigNumber>;

    yieldRate(overrides?: CallOverrides): Promise<BigNumber>;

    yields(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    PRICE_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    checkpoint(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    checkpointOtherUser(
      user_addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    earned(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eligibleCurrentVeDPX(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emittedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fractionParticipating(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getYield(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    getYieldForDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    greylist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    greylistAddress(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    lastTimeYieldApplicable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    periodFinish(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverERC20(
      tokenAddress: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    reward_notifiers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPauses(
      _yieldCollectionPaused: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setYieldDuration(
      _yieldDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setYieldRate(
      _new_rate0: PromiseOrValue<BigNumberish>,
      sync_too: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    sync(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    toggleRewardNotifier(
      notifier_addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    totalVeDPXParticipating(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalVeDPXSupplyStored(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    userIsInitialized(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userVeDPXCheckpointed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userVeDPXEndpointCheckpointed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    userYieldPerTokenPaid(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    veDPX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    yieldCollectionPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    yieldDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    yieldPerVeDPX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    yieldPerVeDPXStored(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    yieldRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    yields(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}