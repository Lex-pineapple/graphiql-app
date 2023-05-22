import '../styles/userIcon.scss';
import { useSelector } from 'react-redux';
import { IStore } from '../@types/store';
import { IUserIconProps } from '../@types/userIcon';

export const UserIcon = ({ onClick }: IUserIconProps) => {
  const userName = useSelector((store: IStore) => store.auth.authInfo.displayName);

  return (
    <div onClick={onClick} className="user-icon">
      {userName ? userName[0].toUpperCase() : 'AA'}
    </div>
  );
};
