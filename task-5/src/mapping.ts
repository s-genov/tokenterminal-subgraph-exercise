import { BigInt } from "@graphprotocol/graph-ts"
import {
  HegicCALL,
  Acquired,
} from "../generated/HegicCALL/HegicCALL"
import { Pool } from "../generated/schema"
import { getOrCreatePool } from "./helpers"

export function handleAcquired(event: Acquired): void {

  let entity = getOrCreatePool(event.params.id.toHex())
  let contract = HegicCALL.bind(event.address)

  entity.name = contract.name();
  entity.cumulativePremium = entity.cumulativePremium.plus(event.params.premium)
  entity.cumulativeSettlementFees = entity.cumulativeSettlementFees.plus(event.params.settlementFee)
  
  entity.save()
}