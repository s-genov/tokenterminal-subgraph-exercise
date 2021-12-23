
import { Pool } from '../generated/schema'
import { ZERO_BI } from "./constants"

export function getOrCreatePool(id: string): Pool {
  let pool = Pool.load(id);

  if (pool == null) {
    pool = new Pool(id);
    pool.name = "";
    pool.cumulativePremium = ZERO_BI;
    pool.cumulativeSettlementFees= ZERO_BI;
  }

  return pool;
}