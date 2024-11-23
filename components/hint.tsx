import { Tooltip,TooltipContent,TooltipTrigger,TooltipProvider } from "./ui/tooltip";

export interface Hintprops{
    label : string;
    children : React.ReactNode;
    side? : "top" | "bottom" | "left" | "right";
    align? : "start" | "center" | "end";
    sideOffset? : number;
    alignOffset? : number;
}

export const Hint = ({
    label,
    children,
    side,
    align,
    sideOffset,
    alignOffset
} : Hintprops) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger>
                    {children}
                </TooltipTrigger>
                <TooltipContent className="text-white bg-black border-black"
                    side={side}
                    align={align}
                    sideOffset={sideOffset}
                    alignOffset={alignOffset}>
                    <p className="font-semibold capitalize">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}