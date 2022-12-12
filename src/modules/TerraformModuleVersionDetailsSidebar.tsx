import { Chip, Link, styled, Toolbar, Tooltip, Typography, useTheme, TypographyProps } from '@mui/material';
import Box from '@mui/material/Box';
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import { useFragment } from 'react-relay/hooks';
import Gravatar from '../common/Gravatar';
import { TerraformModuleVersionDetailsSidebarFragment_details$key } from './__generated__/TerraformModuleVersionDetailsSidebarFragment_details.graphql';

interface Props {
  fragmentRef: TerraformModuleVersionDetailsSidebarFragment_details$key
  open: boolean
  temporary: boolean
  onClose: () => void
}

export const SidebarWidth = 400;

const Section = styled(Box)(() => ({
  marginBottom: 24,
}));

const FieldLabel = styled(
  ({ ...props }: TypographyProps) => <Typography color="textSecondary" variant="subtitle2" {...props} />
)(() => ({
  fontSize: 16,
  marginBottom: 1,
}));

const Drawer = styled(MuiDrawer)<DrawerProps>(() => ({
  flexShrink: 0,
  overflowX: 'hidden',
  [`& .MuiDrawer-paper`]: {
    overflowX: 'hidden',
    width: SidebarWidth,
    boxSizing: 'border-box'
  },
  width: SidebarWidth,
}));

function TerraformModuleVersionDetailsSidebar(props: Props) {
  const { open, temporary, onClose } = props;
  const theme = useTheme();

  const data = useFragment<TerraformModuleVersionDetailsSidebarFragment_details$key>(
    graphql`
    fragment TerraformModuleVersionDetailsSidebarFragment_details on TerraformModuleVersion
    {
      version
      createdBy
      latest
      metadata {
          createdAt
      }
      module {
        id
        name
        system
        registryNamespace
        private
        repositoryUrl
      }
    }
  `, props.fragmentRef);

  return (
    <Drawer
      variant={temporary ? 'temporary' : 'permanent'}
      open={open}
      hideBackdrop={false}
      anchor='right'
      onClose={onClose}
    >
      <Toolbar />
      <Box padding={2}>
        <Section>
          <FieldLabel>Version</FieldLabel>
          <Box display="flex" alignItems="center">
            <Typography>
              {data.version}
            </Typography>
            {data.latest && <Chip size="small" color="secondary" sx={{ marginLeft: 1 }} label="latest" />}
          </Box>
        </Section>
        <Section>
          <FieldLabel>System</FieldLabel>
          <Typography>
            {data.module.system}
          </Typography>
        </Section>
        {data && <Section>
          <FieldLabel>Published</FieldLabel>
          <Box display="flex" alignItems="center">
            <Tooltip title={data.metadata.createdAt as string}>
              <Typography sx={{ marginRight: 1 }}>
                {moment(data.metadata.createdAt as moment.MomentInput).fromNow()} by
              </Typography>
            </Tooltip>
            <Tooltip title={data.createdBy}>
              <Box>
                <Gravatar width={20} height={20} email={data.createdBy} />
              </Box>
            </Tooltip>
          </Box>
        </Section>}
        <Section>
          <FieldLabel>Repository</FieldLabel>
          {data.module.repositoryUrl && <Typography component="p" noWrap sx={{ color: theme.palette.primary.main }}>
            <Link noWrap underline="hover" href={data.module.repositoryUrl}>
              <Typography component="span" noWrap>
                {data.module.repositoryUrl}
              </Typography>
            </Link>
          </Typography>}
          {!data.module.repositoryUrl && <Typography>None</Typography>}
        </Section>
      </Box>
    </Drawer>
  );
}

export default TerraformModuleVersionDetailsSidebar;
