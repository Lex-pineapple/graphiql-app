import React from 'react';
import '../styles/userIcon.scss';
import { useSelector } from 'react-redux';
import { IStore } from '../@types/store';

interface UserIconProps {
  onClick?: React.MouseEventHandler;
}

export const UserIcon = ({ onClick }: UserIconProps) => {
  const userName = useSelector((store: IStore) => store.auth.authInfo.displayName);

  return (
    <div onClick={onClick} className="user-icon">
      {userName[0].toUpperCase() || 'AA'}
    </div>
  );
};
