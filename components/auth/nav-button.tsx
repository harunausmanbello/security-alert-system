"use client";
import { useRouter } from "next/navigation";
import { NavbuttonProps } from "@/types";
import Link from "next/link";

export const Navbutton = ({
  children,
  mode = "redirect",
  endPoint,
  asChild,
}: NavbuttonProps) => {
  const router = useRouter();

  return (
    <Link
      href={endPoint}
      className="flex flex-col items-center justify-center cursor-pointer"
      onClick={() => {
        localStorage.clear();
      }}
    >
      <span>{children}</span>
    </Link>
  );
};
