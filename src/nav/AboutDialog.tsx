import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

interface Props {
    frontendVersion: string;
    backendVersion: string;
    onClose: () => void;
}

function AboutDialog({ frontendVersion, backendVersion, onClose }: Props) {
    const stripPrefix = (version: string) => {
        const prefix = 'v'
        return version.startsWith(prefix) ? version.slice(prefix.length) : version;
    }

    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={true}
        >
            <DialogTitle sx={{ m: 0, p: 2 }}>
                About Tharsis
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom variant="subtitle2">
                    A remote Terraform backend that provides state management and a full execution environment for running Terraform modules.
                </Typography>
                <Box mt={2}>
                    <Typography gutterBottom variant="body2">Frontend {stripPrefix(frontendVersion)}</Typography>
                    <Typography gutterBottom variant="body2">Backend {stripPrefix(backendVersion)}</Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AboutDialog;
