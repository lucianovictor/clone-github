import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'lucianovictor'}
            name={'Luciano Victor'}
            avatarUrl={'https://avatars.githubusercontent.com/u/54756923?v=4'}
            followers={3000}
            following={13}
            company={undefined}
            location={'São Paulo, Brazil'}
            email={'lucianocarvallho7@gmail.com'}
            blog={undefined}
          />
        </LeftSide>
        <RightSide></RightSide>
      </Main>
    </Container>
  );
}

export default Profile;