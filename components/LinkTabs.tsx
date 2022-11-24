import React from "react";
import Link from "./Link";
import { Tabs, Tab, styled, TabProps, TabsProps } from "@mui/material";
import { motion } from "framer-motion";

interface StyledTabsProps extends TabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  spanColor?: any;
}

interface StyledTabProps extends TabProps {
  label: string;
  href: string;
}

export const StyledTabs = styled(({ spanColor, ...other }: StyledTabsProps) => {
  return (
    <Tabs
      {...other}
      textColor="inherit"
      TabIndicatorProps={{
        children: (
          <motion.span
            style={{ backgroundColor: spanColor }}
            className="MuiTabs-indicatorSpan"
          />
        ),
      }}
    />
  );
})(({ theme }) => ({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
  },
}));

export const StyledTab = styled((props: StyledTabProps) => (
  <LinkTab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.pxToRem(15),
  color: "inherit",
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(8, 7, 9, 0.32)",
  },
}));

const LinkTab = (props: StyledTabProps) => {
  // @ts-ignore i don't care
  return <Tab component={Link} {...props} />;
};
