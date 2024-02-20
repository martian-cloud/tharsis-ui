import { Box, darken, useTheme } from '@mui/material';
import grey from '@mui/material/colors/grey';
import Anser from 'anser';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Link from '../../routes/Link';

interface Props {
    logs: string
}

interface LogLineProps {
    log: string
    lineNumber: number
    selected?: boolean
}

function buildLogTextStyle(entry: Anser.AnserJsonEntry) {
    return {
        backgroundColor: entry.bg ? `rgb(${entry.bg})` : undefined,
        color: entry.fg ? `rgb(${entry.fg})` : undefined,
        fontWeight: entry.decoration === 'bold' ? 500 : undefined
    };
}

function LogLine({ log, lineNumber, selected }: LogLineProps) {
    const theme = useTheme();
    const ref = useRef<HTMLDivElement>();
    const [autoScroll, setAutoscroll] = useState(true);

    const parts = useMemo(() => Anser.ansiToJson(log).filter(part => part.content !== '').
        map((part, index) => (<Box
            key={index}
            component="span"
            sx={buildLogTextStyle(part)}
        >
            {part.content}
        </Box>)), [log]);

    useEffect(() => {
        if (selected && autoScroll && ref.current) {
            ref.current.scrollIntoView({
                block: 'center'
            });
        }
    }, [selected, autoScroll]);

    return <Box ref={ref} sx={{ padding: '1px 8px 1px 56px' }}>
        <Link
            id={`L${lineNumber}`}
            preventScrollReset
            sx={{
                color: selected ? theme.palette.primary.main : grey[500],
                marginLeft: '-48px',
                paddingLeft: 1,
                paddingRight: 2,
                minWidth: '48px',
                textAlign: 'right',
                display: 'inline-block',
            }}
            replace
            state={{
                preventScrollReset: true
            }}
            to={{
                search: `line=${lineNumber}`,
            }}
            onClick={() => setAutoscroll(false)}
        >
            {lineNumber}
        </Link>
        {parts}
    </Box>;
}

const MemorizedLogLine = React.memo(LogLine);

function LogViewer({ logs }: Props) {
    const theme = useTheme();
    const [searchParams] = useSearchParams();

    const [selectedLine, setSelectedLine] = useState<number | undefined>();

    useEffect(() => {
        const selectedLineParam = searchParams.get('line');
        if (selectedLineParam) {
            setSelectedLine(parseInt(selectedLineParam));
        }
    }, [searchParams]);

    const logLines = useMemo(() => logs.split(/\r?\n/).filter(l => l !== ''), [logs]);

    return (
        <Box
            sx={{
                fontSize: '13px',
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace !important',
                backgroundColor: darken(theme.palette.background.default, 0.5),
                color: theme.palette.text.primary,
                wordBreak: 'break-all',
                whiteSpace: 'pre-wrap',
                marginTop: 0,
                paddingTop: 1,
                paddingBottom: 2,
                minHeight: 120,
                height: '100%',
                overflowY: 'auto',
            }}
            component="pre"
        >
            {logLines.map((l, index) => {
                const lineNumber = index + 1;
                return <MemorizedLogLine key={`L${lineNumber}`} log={l} lineNumber={lineNumber} selected={lineNumber === selectedLine} />;
            })}
        </Box>
    );
}

export default LogViewer;
