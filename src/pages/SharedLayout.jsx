import Header from 'components/Header/Header';
import { MainContainer } from 'components/MainContainer/MainContainer';
import { ModalTeam } from 'components/ModalTeam/ModalTeam';
import team from '../images/svg-list-icon/teamwork.png';
import s from '../components/ModalTeam/ModalTeam.module.css';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

//-----------------------------------------------------//
export default function SharedLayout() {
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleCloseModal = event => {
      if (event.code === 'Escape') {
        setOpen(!open);
      }
    };

    window.addEventListener('keydown', handleCloseModal);
    return () => window.removeEventListener('keydown', handleCloseModal);
  }, [open]);

  useEffect(() => {
    const body = document.querySelector('body');
    if (open) {
      body.classList.add('hidden');
    }

    return () => {
      body.classList.remove('hidden');
    };
  });

  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
        <ModalTeam open={open} handler={closeModal} />
        <div className={s.btn__container}>
          <img
            type="button"
            src={team}
            className={s.team__icon}
            onClick={() => {
              setOpen(!open);
            }}
            alt="1"
          />
        </div>
      </MainContainer>
    </>
  );
}
