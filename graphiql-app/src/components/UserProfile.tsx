import { useSelector } from 'react-redux';
import { UserIcon } from './UserIcon';
import { IStore } from '../@types/store';

export const UserProfile = () => {
  const userInfo = useSelector((store: IStore) => store.auth.authInfo);

  return (
    <div className="modal-window__person">
      <UserIcon />
      <div className="modal-person__name-email">
        {<div className="modal-person__name">{userInfo.displayName}</div>}
        <div className="modal-person__email">{userInfo.email}</div>
      </div>
    </div>
  );
};
