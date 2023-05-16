import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HeaderNav,
  DiscordButton,
  TriangleIcon,
  TriangleContainer,
  ThemeSelectRow,
  QortalLogoContainer,
  HeaderButtonsRow,
  Docs,
  HamburgerIcon
} from './Header-styles';
import { useMediaQuery, useTheme } from '@mui/material';
import { LayoutProps } from '../Main/MainLayout';
import { LightModeSVG } from '../../Common/Icons/LightModeSVG';
import { DarkModeSVG } from '../../Common/Icons/DarkModeSVG';
import QortalLogo from '../../../images/Logo/QortalLogo.png';
import { MobileDrawer } from './MobileDrawer';
import { motion, AnimatePresence } from 'framer-motion';
import { DocsSVG } from '../../Common/Icons/docsSVG';

export const Header: FC<LayoutProps> = ({ setTheme }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [openMobileDrawer, setOpenMobileDrawer] = useState<boolean>(false);

  // Variants for the framer-motion transition

  const mobileDrawerVariants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 95
      }
    },
    closed: {
      opacity: 0.2,
      x: -100,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      <HeaderNav>
        <ThemeSelectRow>
          {theme.palette.mode === 'dark' ? (
            <LightModeSVG
              onClickFunc={() => setTheme('light')}
              color="white"
              height="22"
              width="22"
            />
          ) : (
            <DarkModeSVG
              onClickFunc={() => setTheme('dark')}
              color="black"
              height="22"
              width="22"
            />
          )}
          <QortalLogoContainer
            src={QortalLogo}
            alt="Qblog Logo"
            onClick={() => {
              navigate(`/`);
            }}
          />
        </ThemeSelectRow>
        {isMobile ? (
          <HamburgerIcon
            color={theme.palette.text.primary}
            height={'32'}
            width={'32'}
            onClickFunc={() => setOpenMobileDrawer(!openMobileDrawer)}
            rotated={{ isOn: openMobileDrawer ? true : false }}
          />
        ) : (
          <HeaderButtonsRow>
            <Docs>
              Documentation
              <DocsSVG
                color={"#ffffff"}
                height={'22'}
                width={'22'}
              />
            </Docs>
            <DiscordButton
              onClick={() => {
                window.open('https://discord.gg/nNvqGAamjb', '_blank');
              }}
            >
              Join Discord
              <TriangleContainer>
                <TriangleIcon />
              </TriangleContainer>
            </DiscordButton>
          </HeaderButtonsRow>
        )}
      </HeaderNav>
      <AnimatePresence>
        {openMobileDrawer && (
          <motion.div
            animate={'opened'}
            initial={'closed'}
            exit={{ opacity: 0 }}
            variants={mobileDrawerVariants}
            style={{
              top: '115px',
              position: 'absolute',
              left: '0',
              right: '0',
              width: '100%',
              height: '100%',
              zIndex: 5,
              backgroundColor: 'white'
            }}
          >
            <MobileDrawer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
