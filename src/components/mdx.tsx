import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import dynamic from "next/dynamic";
import React, { type ReactNode } from "react";

import {
  Heading,
  HeadingLink,
  InlineCode,
  SmartImage,
  SmartLink,
  Text,
} from "@/once-ui/components";
import type { SmartImageProps } from "@/once-ui/components/SmartImage";
import type { TextProps } from "@/once-ui/interfaces";
import { CodeBlock } from "@/once-ui/modules/code/CodeBlock";

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <SmartLink href={href} {...props}>
        {children}
      </SmartLink>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function createImage({ alt, src, ...props }: SmartImageProps & { src: string }) {
  if (!src) {
    console.error("SmartImage requires a valid 'src' property.");
    return null;
  }

  return (
    <SmartImage
      marginTop="8"
      marginBottom="16"
      enlarge
      radius="m"
      aspectRatio="16 / 9"
      border="neutral-alpha-medium"
      sizes="(max-width: 960px) 100vw, 960px"
      alt={alt}
      src={src}
      {...props}
    />
  );
}

function slugify(str: string | ReactNode): string {
  // Convert ReactNode to string
  let text: string;
  if (typeof str === "string") {
    text = str;
  } else if (React.isValidElement(str)) {
    // Handle React elements by extracting text content
    text = extractTextFromElement(str);
  } else if (Array.isArray(str)) {
    // Handle arrays of React elements/text
    text = str
      .map((item) =>
        typeof item === "string"
          ? item
          : React.isValidElement(item)
            ? extractTextFromElement(item)
            : "",
      )
      .join("");
  } else {
    text = String(str);
  }

  return text
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function extractTextFromElement(element: React.ReactElement): string {
  if (typeof element.props.children === "string") {
    return element.props.children;
  }
  if (Array.isArray(element.props.children)) {
    return element.props.children
      .map((child: any) =>
        typeof child === "string"
          ? child
          : React.isValidElement(child)
            ? extractTextFromElement(child)
            : "",
      )
      .join("");
  }
  return "";
}

function createHeading(as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") {
  const CustomHeading = ({ children, ...props }: TextProps<typeof as>) => {
    const slug = slugify(children);
    return (
      <HeadingLink
        style={{ marginTop: "var(--static-space-24)", marginBottom: "var(--static-space-12)" }}
        as={as}
        id={slug}
        {...props}
      >
        {children}
      </HeadingLink>
    );
  };

  CustomHeading.displayName = `${as}`;

  return CustomHeading;
}

function createParagraph({ children }: TextProps) {
  return (
    <Text
      style={{ lineHeight: "175%" }}
      variant="body-default-m"
      onBackground="neutral-medium"
      marginTop="8"
      marginBottom="12"
    >
      {children}
    </Text>
  );
}

function createInlineCode({ children }: { children: ReactNode }) {
  return <InlineCode>{children}</InlineCode>;
}

function createCodeBlock(props: any) {
  // For pre tags that contain code blocks
  if (props.children?.props?.className) {
    const { className, children } = props.children.props;

    // Extract language from className (format: language-xxx)
    const language = className.replace("language-", "");
    const label = language.charAt(0).toUpperCase() + language.slice(1);

    return (
      <CodeBlock
        marginTop="8"
        marginBottom="16"
        codeInstances={[
          {
            code: children,
            language,
            label,
          },
        ]}
        copyButton={true}
      />
    );
  }

  // Fallback for other pre tags or empty code blocks
  return <pre {...props} />;
}

const components = {
  p: createParagraph as any,
  h1: createHeading("h1") as any,
  h2: createHeading("h2") as any,
  h3: createHeading("h3") as any,
  h4: createHeading("h4") as any,
  h5: createHeading("h5") as any,
  h6: createHeading("h6") as any,
  img: createImage as any,
  a: CustomLink as any,
  code: createInlineCode as any,
  pre: createCodeBlock as any,
  Heading,
  Text,
  CodeBlock,
  InlineCode,
  Accordion: dynamic(() => import("@/once-ui/components").then((mod) => mod.Accordion)),
  AccordionGroup: dynamic(() => import("@/once-ui/components").then((mod) => mod.AccordionGroup)),
  Table: dynamic(() => import("@/once-ui/components").then((mod) => mod.Table)),
  Feedback: dynamic(() => import("@/once-ui/components").then((mod) => mod.Feedback)),
  Button: dynamic(() => import("@/once-ui/components").then((mod) => mod.Button)),
  Card: dynamic(() => import("@/once-ui/components").then((mod) => mod.Card)),
  Grid: dynamic(() => import("@/once-ui/components").then((mod) => mod.Grid)),
  Row: dynamic(() => import("@/once-ui/components").then((mod) => mod.Row)),
  Column: dynamic(() => import("@/once-ui/components").then((mod) => mod.Column)),
  Icon: dynamic(() => import("@/once-ui/components").then((mod) => mod.Icon)),
  SmartImage: dynamic(() => import("@/once-ui/components").then((mod) => mod.SmartImage)),
  SmartLink: dynamic(() => import("@/once-ui/components").then((mod) => mod.SmartLink)),
};

type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />;
}
