import { forwardRef } from 'react'
import { DefaultButton } from './button.styles'
import { IButtonProps } from './i-button'



const Button = forwardRef<HTMLButtonElement, IButtonProps>(
    ({ size, variant, onClick, children }, ref) => {
      return size === "normal" ? (
        <DefaultButton variant={variant} onClick={onClick} ref={ref}>
          {children}
        </DefaultButton>
      ) : null
    }
  );
  

Button.displayName = "button"
export {Button}


