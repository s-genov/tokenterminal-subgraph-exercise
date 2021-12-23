
import { Pool } from '../generated/schema'
import { ZERO_BI } from "./constants"
import { HEGIC_CALL_ADDRESS } from './constants';
import { HegicCALL } from '../generated/HegicCALL/HegicCALL';

export function getOrCreatePool(): Pool {
  let pool = Pool.load(HEGIC_CALL_ADDRESS);

  if (pool == null) {
    pool = new Pool(HEGIC_CALL_ADDRESS);
    pool.name = "";
    pool.cumulativePremium = ZERO_BI;
    pool.cumulativeSettlementFees= ZERO_BI;
  }

  return pool;
}