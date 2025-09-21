import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";
import "@/styles/MDXComponents.module.scss";

export function MyButton({ children }: { children: ReactNode }) {
  return <button className="my-button">{children}</button>;
}

export const MDXComponents = {
  img: (props: ImageProps) => (
    <Image
      {...props}
      alt={props.alt || ""}
      width={800}
      height={600}
      className="mdx-image"
    />
  ),
  MyButton,
};
