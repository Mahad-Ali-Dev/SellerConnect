import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";

export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    shimmerColor?: string;
    shimmerSize?: string;
    borderRadius?: string;
    shimmerDuration?: string;
    background?: string;
    className?: string;
    children?: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
    (
        {
            shimmerColor = "#8c00ffff",
            shimmerSize = "0.1em",
            shimmerDuration = "2.5s",
            borderRadius = "12px",
            background = "linear-gradient(135deg, #1c0d2581 0%, #3f1e8bd3 50%, #0f0b1dff 100%)",
            className,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <button
                style={
                    {
                        "--spread": "120deg",
                        "--shimmer-color": shimmerColor,
                        "--radius": borderRadius,
                        "--speed": shimmerDuration,
                        "--cut": shimmerSize,
                        "--bg": background,
                    } as CSSProperties
                }
                className={cn(
                    "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/20 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)]",
                    "transform-gpu transition-all duration-300 ease-in-out active:translate-y-[1px] hover:scale-[1.02] hover:shadow-xl hover:shadow-[#6366F1]/30",
                    "w-full sm:w-auto",
                    className
                )}
                ref={ref}
                {...props}
            >
                {/* spark container */}
                <div
                    className={cn(
                        "-z-30 blur-[3px]",
                        "absolute inset-0 overflow-visible [container-type:size]"
                    )}
                >
                    {/* spark */}
                    <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                        {/* spark before */}
                        <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
                    </div>
                </div>
                {children}

                {/* Highlight */}
                <div
                    className={cn(
                        "insert-0 absolute h-full w-full",

                        "rounded-xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",

                        // transition
                        "transform-gpu transition-all duration-300 ease-in-out",

                        // on hover
                        "group-hover:shadow-[inset_0_-6px_10px_#ffffff4f]",

                        // on click
                        "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
                    )}
                />

                {/* backdrop */}
                <div
                    className={cn(
                        "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
                    )}
                />
            </button>
        );
    }
);

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;
