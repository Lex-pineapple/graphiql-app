import React from 'react';
import '../styles/userIcon.scss';

interface UserIconProps {
  onClick: React.MouseEventHandler;
}

export const UserIcon = ({ onClick }: UserIconProps) => {
  return (
    <div onClick={onClick} className="user-icon">
      RR
    </div>
  );
};
