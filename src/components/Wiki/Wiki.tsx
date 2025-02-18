"use client";
import React, { FC } from 'react'
import { MainContainer, WikiContainer } from './Wiki-styles'
import { Sidebar } from './Sidebar/Sidebar'
import { WikiProps } from '../../app/wiki/types';

export const Wiki: FC<WikiProps> = ({title, children, pages}) => {
  return (
    <WikiContainer>
      <Sidebar pages={pages} />
        <MainContainer>
          {children}
        </MainContainer>
    </WikiContainer>
  )
}
