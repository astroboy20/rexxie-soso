import { HTMLAttributes } from "react";

export interface ITextProps
    extends Omit <HTMLAttributes<HTMLParagraphElement>,'css'>{
        /**
         * Variant for text
         * @example "h1"
         * @example "h2"
         * @example "h3"
         * @example "h4"
         * @example "h5"
         */
        variant:string

        /**
         * Weight of the text font
         * @example "bold"
         * @example "light"
         */
        weight:string
        
        /**
         * @example "primary"
         */
        type:string
        color?:string
        onHoverColor?:string
    }