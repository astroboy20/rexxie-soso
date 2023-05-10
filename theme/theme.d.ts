import "styled-components";

import { colors } from "./colors";
import { fontWeight } from "./fontWeight";

type ColorTokens = Partial<typeof colors>;
type FontWeightTokens = Partial<typeof fontWeight>;

declare module "styled-components" {
   export interface DefaultTheme {
      colors?: ColorTokens;
      fontWeight?: FontWeightTokens;
   }
}
