import { ButtonHTMLAttributes } from "react";

export interface IButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>,'çss'>{

        /**
         * Size of the button
         * @example "normal"
         */
        size:string 
        /**
         * Variant of the button
         * @example "primary"
         */
        variant:string

    }