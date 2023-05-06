import { UserIcon } from './UserIcon';

export const UserProfile = () => {
  return (
    <div className="modal-window__person">
      <UserIcon />
      <div className="modal-person__name-email">
        {<div className="modal-person__name">Rubi Rhod</div>}
        <div className="modal-person__email">Fight_element@gmail.com</div>
      </div>
    </div>
  );
};
