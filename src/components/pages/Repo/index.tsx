import React from 'react';

import {Link} from 'react-router-dom'

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon  } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'/lucianovictor'}>
          lucianovictor
        </Link>
          <span>/</span>
        <Link className={'reponame'} to={'/lucianovictor/page-blizzard'}>
          Page-Blizzard
        </Link>
      </Breadcrumb>
        <p>project made using next, sass and typescript based on study</p>
        <Stats>
          <li>
            <StarIcon />
            <b>9</b>
            <span>stars</span>
          </li>
          <li>
            <ForkIcon />
            <b>0</b>
            <span>forks</span>
          </li>
        </Stats>

        <LinkButton href={'https://github.com/lucianovictor/page-blizzard'}>
          <GithubIcon />
          <span>View on GitHub</span>
        </LinkButton>
    </Container>
  );
}

export default Repo;