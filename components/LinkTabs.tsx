import React from "react";
import Link from "./Link";
import { Tabs, Tab, styled, TabProps } from "@mui/material";

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps extends TabProps {
  label: string;
  href: string;
}

export const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))(({ theme }) => ({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: "50%",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  },
}));

export const StyledTab = styled((props: StyledTabProps) => (
  <LinkTab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  "&.Mui-selected": {
    color: theme.palette.primary.main,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(8, 7, 9, 0.32)",
  },
}));

const LinkTab = (props: StyledTabProps) => {
  // @ts-ignore i don't care
  return <Tab component={Link} {...props} />;
};
