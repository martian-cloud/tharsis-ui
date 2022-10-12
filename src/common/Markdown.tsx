import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Link from '@mui/material/Link';
import Paper from "@mui/material/Paper";
import { Variant } from '@mui/material/styles/createTypography';
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Typography from '@mui/material/Typography';
import ReactMarkdown, { Options } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as prismTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';

function MarkdownParagraph({ ...props }: any) {
    return <Typography paragraph>{props.children}</Typography>
}

function MarkdownHeading({ ...props }: any) {
    let variant: Variant;
    switch (props.level) {
        case 1:
            variant = "h4";
            break;
        case 2:
            variant = "h5";
            break;
        case 3:
            variant = "h6";
            break;
        case 4:
            variant = "subtitle1";
            break;
        case 5:
            variant = "subtitle2";
            break;
        case 6:
            variant = "subtitle2";
            break;
        default:
            variant = "h6";
            break;
    }
    return <Typography gutterBottom variant={variant}>{props.children}</Typography>
}

function MarkdownTable({ ...props }: any) {
    return (
        <TableContainer sx={{ margin: '16px 0' }} component={Paper}>
            <Table size="small">{props.children}</Table>
        </TableContainer>
    );
}

function MarkdownTableCell({ ...props }: any) {
    return <TableCell>{props.children}</TableCell>
}

function MarkdownTableRow({ ...props }: any) {
    return <TableRow sx={{ '&:last-child td': { border: 0 } }}>{props.children}</TableRow>
}

function MarkdownTableBody({ ...props }: any) {
    return <TableBody>{props.children}</TableBody>
}

function MarkdownTableHead({ ...props }: any) {
    return <TableHead sx={{ textAlign: 'left' }}>{props.children}</TableHead>
}

function MarkdownLink({ ...props }: any) {
    return <Link underline="none" href={props.href}>{props.children}</Link>
}

function MarkdownCode({ inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
        <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={prismTheme}
            language={match[1]}
            PreTag="div"
            wrapLongLines
            {...props}
        />
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    )
}

const components = {
    h1: MarkdownHeading,
    h2: MarkdownHeading,
    h3: MarkdownHeading,
    h4: MarkdownHeading,
    h5: MarkdownHeading,
    h6: MarkdownHeading,
    p: MarkdownParagraph,
    a: MarkdownLink,
    code: MarkdownCode,
    table: MarkdownTable,
    thead: MarkdownTableHead,
    tbody: MarkdownTableBody,
    tr: MarkdownTableRow,
    td: MarkdownTableCell,
    th: MarkdownTableCell,
};

export default function Markdown(props: Options) {
    return <ReactMarkdown components={components} {...props} />;
}
