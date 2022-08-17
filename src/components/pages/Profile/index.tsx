import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading  } from './styles';

import ProfileData from '../../../components/ProfileData';
import RepoCard  from '../../RepoCard';
import RandomCalendar from '../../RandomCalendar';

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
        <RightSide>
          <Repos>
            <h2>Random repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map(n =>(
                <RepoCard 
                  key={n}
                  username={'lucianovictor'}
                  reponame={'page-blizzard'}
                  description={'Page blizzard'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={8}
                  forks={4}
                />
              ) )}
            </div>
          </Repos>
          <CalendarHeading>
            Random calendar (do not repsent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;