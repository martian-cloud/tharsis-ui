import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemText, Typography } from "@mui/material";

interface Props {
    frontendVersion: string;
    backendVersion: string;
    dbMigrationVersion: string;
    dbMigrationDirty: boolean;
    onClose: () => void;
}

function AboutDialog({ frontendVersion, backendVersion, dbMigrationVersion, dbMigrationDirty, onClose }: Props) {
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
                <Box>
                    <List sx={{ padding: 0 }}>
                        <ListItem sx={{ padding: 0 }}>
                            <ListItemText primary="Frontend" secondary={stripPrefix(frontendVersion)} />
                        </ListItem>
                        <ListItem sx={{ padding: 0 }}>
                            <ListItemText primary="Backend" secondary={stripPrefix(backendVersion)} />
                        </ListItem>
                        <ListItem sx={{ padding: 0 }}>
                            <ListItemText
                                primary="Database Migration"
                                secondary={
                                    <>
                                        {dbMigrationVersion}
                                        {dbMigrationDirty && <strong> (dirty)</strong>}
                                    </>
                                }
                            />
                        </ListItem>
                    </List>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AboutDialog;
