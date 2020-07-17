import React from 'react';

import { Container, Header, BackIcon, Profileinfo } from './styles';

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
      {/* <Profilepage/> */}

      {/* <BottomMenu>
        {/* <HomeIcon/>
        <SearchIcon/>
        <BellIcon/>
        <EmailIcon/>

      </BottomMenu> */}
    </Container>
  );
};

export default Main;
