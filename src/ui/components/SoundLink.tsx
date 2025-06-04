import { useHoverSound } from "@ui/hooks/useHoverSound";
import { ReactNode } from "react";

interface SoundLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  target?: string;
}

export const SoundLink = ({
  to,
  children,
  className,
  target,
}: SoundLinkProps) => {
  const { playSound } = useHoverSound();

  return (
    <a
      href={to}
      className={className}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onMouseEnter={playSound}
    >
      {children}
    </a>
  );
};
