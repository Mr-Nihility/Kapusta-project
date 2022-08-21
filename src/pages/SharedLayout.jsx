import Header from 'components/Header/Header';
import { MainContainer } from 'components/MainContainer/MainContainer';
import { ModalTeam } from 'components/ModalTeam/ModalTeam';

import React from 'react';
import { Outlet } from 'react-router-dom';

//-----------------------------------------------------//
export default function SharedLayout() {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
        <ModalTeam />
      </MainContainer>
    </>
  );
}
