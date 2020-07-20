import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  Location,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Mateus Amaral</h1>
        <h2>@edd3n</h2>
        <p>
          Developer at <a href="https://www.kfe.com.br/">@KFESOFTWARE</a>{' '}
        </p>
        <ul>
          <li>
            <Location />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 07 de julho 2001
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>500</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
