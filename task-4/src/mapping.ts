import { BigInt } from "@graphprotocol/graph-ts"
import {
  ETHRegistrarController,
  NameRegistered,
  NameRenewed,
  NewPriceOracle,
  OwnershipTransferred
} from "../generated/ETHRegistrarController/ETHRegistrarController"
import { Global } from '../generated/schema'
import { getOrCreateGlobal } from "./helpers"

export function handleNameRegistered(event: NameRegistered): void {
  let entity = getOrCreateGlobal()

  entity.registrationFees = entity.registrationFees.plus(event.params.cost);

  entity.save();
}

export function handleNameRenewed(event: NameRenewed): void {
  let entity = getOrCreateGlobal()

  entity.renewalFees = entity.renewalFees.plus(event.params.cost);

  entity.save();
}

