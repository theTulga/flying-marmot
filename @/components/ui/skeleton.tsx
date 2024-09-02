import * as React from "react";

import ReactLoadingSkeleton from "react-loading-skeleton";
import { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useTheme } from "../theme-provider";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Skeleton = (props: SkeletonProps) => {
  const { activeTheme } = useTheme();
  return (
    <ReactLoadingSkeleton
      baseColor={activeTheme === "dark" ? "#2a2a2a" : "#e5e7eb"}
      highlightColor={activeTheme === "dark" ? "#3a3a3a" : "#f3f4f6"}
      {...props}
    />
  );
};

export { Skeleton };
