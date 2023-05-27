export interface IInfoModalProps {
  formatId: AuthMsg.signUpSuccess | AuthMsg.signInSuccess;
  text?: string;
  onClickOutside: (event: React.MouseEvent) => void;
}
