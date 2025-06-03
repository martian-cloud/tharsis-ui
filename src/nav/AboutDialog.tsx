import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemText, Typography } from "@mui/material";
import Timestamp from "../common/Timestamp";

interface Props {
    frontendVersion: string;
    frontendBuildTimestamp: string;
    backendVersion: string;
    backendBuildTimestamp: string;
    dbMigrationVersion: string;
    dbMigrationDirty: boolean;
    onClose: () => void;
}

function AboutDialog({
    frontendVersion,
    frontendBuildTimestamp,
    backendVersion,
    backendBuildTimestamp,
    dbMigrationVersion,
    dbMigrationDirty,
    onClose
}: Props) {
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
                            <ListItemText
                                primary="Frontend"
                                secondary={
                                    <>
                                        {stripPrefix(frontendVersion)} &mdash; <Timestamp
                                            tooltip="Frontend build date"
                                            format="absolute"
                                            timestamp={frontendBuildTimestamp}
                                        />
                                    </>
                                }
                            />
                        </ListItem>
                        <ListItem sx={{ padding: 0 }}>
                            <ListItemText
                                primary="Backend"
                                secondary={
                                    <>
                                        {stripPrefix(backendVersion)} &mdash; <Timestamp
                                            tooltip="Backend build date"
                                            format="absolute"
                                            timestamp={backendBuildTimestamp}
                                        />
                                    </>
                                }
                            />
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
