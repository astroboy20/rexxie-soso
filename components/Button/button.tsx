import { forwardRef } from 'react'
import { DefaultButton, TransparentButton } from './button.styles'
import { IButtonProps } from './i-button'



const Button = forwardRef<HTMLButtonElement, IButtonProps>(
    ({ size, variant, onClick, children }, ref) => {
      return size === "normal" ? (
        <DefaultButton variant={variant} onClick={onClick} ref={ref}>
          {children}
        </DefaultButton>
      ) : size === "transparent" ? (
        <TransparentButton variant={variant} onClick = {onClick} ref={ref}>
          {children}
        </TransparentButton>
      ): null
    }
  );
  

Button.displayName = "button"
export {Button}


