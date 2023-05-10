import { forwardRef } from "react";
import { ITextProps } from "./i-text";
import { type } from "os";
import { Primary } from "./Text.style";

const CustomText =forwardRef<HTMLParagraphElement,ITextProps>(
    ({ variant, type, color, children }) => {
        return type === "primary" ? (
          <Primary variant={variant} color={color}>
            {children}
          </Primary>
        ) : null
        
      }
   
    
)

CustomText.displayName ="customtext"

export {CustomText}

