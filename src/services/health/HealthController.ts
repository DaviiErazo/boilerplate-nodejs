
import { getHealth } from "./providers/MessageHealth";


export const getHealthStatus = () => {
  return getHealth();
};