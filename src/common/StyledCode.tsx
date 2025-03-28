import { styled, lighten } from '@mui/material';

interface StyledCodeProps {
    fontSize?: string;
}

export const StyledCode = styled('code')<StyledCodeProps>(({ fontSize = '90%', theme }) => ({
    flexWrap: "wrap",
    padding: "2px 4px",
    color: `${theme.palette.text.primary}`,
    backgroundColor: lighten(theme.palette.background.paper, 0.2),
    borderRadius: "4px",
    fontFamily: "ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
    fontSize
}));
