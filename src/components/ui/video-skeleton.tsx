import React from "react";
import { cn } from "@/lib/utils";

interface VideoSkeletonProps {
    className?: string;
}

export function VideoSkeleton({ className }: VideoSkeletonProps) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-stone-200/50 dark:bg-stone-700/50 w-full h-full flex items-center justify-center aspect-video",
                className
            )}
        >
            <div className="w-12 h-12 rounded-full bg-stone-300 dark:bg-stone-600 animate-pulse" />
        </div>
    );
}

export default VideoSkeleton;
