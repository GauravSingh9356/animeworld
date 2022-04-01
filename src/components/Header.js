import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className='site-header'>
        <div className='site-identity'>
          <h1>
            <a onClick={() => navigate('/')}>My Anime's</a>
          </h1>
        </div>
        <nav className='site-navigation'>
          <ul className='nav'>
            <li>
              <a
                href='https://gsportfolio.netlify.app'
                style={{ color: '#fff' }}
              >
                About
              </a>
            </li>

            <li className='cart'>
              <a onClick={() => navigate('/')}>GitHub</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
