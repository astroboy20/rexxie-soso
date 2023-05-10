import { forwardRef } from "react";
import { ITextProps } from "./i-text";
import { type } from "os";
import { Primary } from "./Text.style";

const CustomText =forwardRef<HTMLParagraphElement,ITextProps>(
    ({ variant, type, color, children , weight}) => {
        return type === "primary" ? (
          <Primary variant={variant} color={color} weight={weight}>
            {children}
          </Primary>
        ) : null
        
      }
   
    
)

CustomText.displayName ="customtext"

export {CustomText}

