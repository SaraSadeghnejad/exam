import {
  Avatar,
  Tooltip,
  IconButton,
  Box,
  Button,
  styled,
  InputBase,
  useTheme
} from '@mui/material';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import InputEmoji from "react-input-emoji";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { FileUploadWithPreview } from 'file-upload-with-preview';
import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';


const MessageInputWrapper = styled(InputBase)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(18)};
    padding: ${theme.spacing(1)};
    width: 100%;
`
);

const Input = styled('input')({
  display: 'none'
});

function BottomBarContent() {
  const theme = useTheme();

  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/3.jpg'
  };
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }

      const { t } = useTranslation();
    const router = useRouter();
  return (
    <Box
      sx={{
        background: theme.colors.alpha.white[50],
        display: 'flex',
        alignItems: 'center',
        p: 2
      }}
    >
      <Box flexGrow={1} display="flex" alignItems="center">
        <Avatar
          sx={{ display: { xs: 'none', sm: 'flex' }, mx: 1 }}
          alt={user.name}
          src={user.avatar}
        />
        <InputEmoji
          className={`${
            router.locale === 'fa' ? 'rtl-text-right' : 'ltr-text-left'
          }`}
          sx={{
            mr: 1
          }}
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder={t('messenger.Type a message')}
          accept="image/*"
          id="messenger-upload-file"
          type="file"
        />
      </Box>
      <Box>
        <Tooltip arrow placement="top" title={t('messenger.Attach a file')}>
          <label htmlFor="messenger-upload-file">
            <IconButton sx={{ mx: 1 }} color="primary" component="span">
              <div
                className="custom-file-container"
                data-upload-id="myFirstImage"
              ></div>
              <AttachFileTwoToneIcon fontSize="small" />
            </IconButton>
          </label>
        </Tooltip>
        <Button startIcon={<SendTwoToneIcon />} variant="contained">
          <span
            style={{
              paddingRight: `${router.locale === 'fa' ? '1em' : '0'}`
            }}
          >
            {t('messenger.Send')}
          </span>
        </Button>
      </Box>
    </Box>
  );
}

export default BottomBarContent;
