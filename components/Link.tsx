import React from "react";
import clsx from "clsx";

import NextLink, { LinkProps as NextLinkProps } from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import { usePathname } from "next/navigation";

// Add support for the sx prop for consistency with the other branches.
const Anchor = styled("a")({});
// @ts-ignore
interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Omit<NextLinkProps, "href" | "as" | "onClick" | "onMouseEnter"> {
  to: NextLinkProps["href"];
}

export const NextLinkComposed = React.forwardRef<
  HTMLAnchorElement,
  NextLinkComposedProps
>(function NextLinkComposed(props, ref) {
  const { to, replace, scroll, shallow, prefetch, ...other } = props;

  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      ref={ref}
      {...other}
    />
  );
});

export type LinkProps = {
  activeClassName?: string;
  href: NextLinkProps["href"];
  noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, "to" | "linkAs" | "href"> &
  Omit<MuiLinkProps, "href">;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/api-reference/next/link
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link(props, ref) {
    const {
      activeClassName = "active",
      className: classNameProps,
      href,
      noLinkStyle,
      prefetch,
      replace,
      role, // Link don't have roles.
      scroll,
      shallow,
      ...other
    } = props;

    const pathname = usePathname();
    const hrefPathname = typeof href === "string" ? href : href.pathname;
    const className = clsx(classNameProps, {
      [activeClassName]: pathname === hrefPathname && activeClassName,
    });

    const isExternal =
      typeof href === "string" &&
      (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0);

    if (isExternal) {
      if (noLinkStyle) {
        return (
          <Anchor className={className} href={href} ref={ref} {...other} />
        );
      }

      return <MuiLink className={className} href={href} ref={ref} {...other} />;
    }

    const nextjsProps = {
      to: href,

      replace,
      scroll,
      shallow,
      prefetch,
    };

    if (noLinkStyle) {
      return (
        <NextLinkComposed
          className={className}
          ref={ref}
          {...nextjsProps}
          {...other}
        />
      );
    }

    return (
      <MuiLink
        component={NextLinkComposed}
        className={className}
        ref={ref}
        {...nextjsProps}
        {...other}
      />
    );
  },
);

export default Link;
