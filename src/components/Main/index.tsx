import React from 'react';

import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  BackIcon,
  Profileinfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <Profileinfo>
          <strong>Mateus Amaral</strong>
          <span>612 tweets</span>
        </Profileinfo>
      </Header>
      <ProfilePage />
      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
