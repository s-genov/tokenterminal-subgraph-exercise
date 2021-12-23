import { Global } from '../generated/schema'
import { ZERO_BI } from "./constants"

export function getOrCreateGlobal(): Global {
  let global = Global.load('1');

  if (global == null) {
    global = new Global('1');
    global.registrationFees = ZERO_BI;
    global.renewalFees = ZERO_BI;
  }

  return global;
}