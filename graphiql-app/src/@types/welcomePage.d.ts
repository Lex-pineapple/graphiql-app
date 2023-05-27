export interface IAboutProjectItemProps {
  headerId: WelcomePageMsg.aboutHeader1 | WelcomePageMsg.aboutHeader2 | WelcomePageMsg.aboutHeader3;
  msgId: WelcomePageMsg.aboutDescr1 | WelcomePageMsg.aboutDescr2 | WelcomePageMsg.aboutDescr3;
  imgName: string;
}

export interface ITeamItemProps {
  nameId: WelcomePageMsg.name1 | WelcomePageMsg.name2 | WelcomePageMsg.name3;
  profId: WelcomePageMsg.prof1;
  imgName: string;
  profileLinks: IProfileLinks;
}

export interface IProfileLinks {
  gmail: string;
  telegram: string;
  discord: string;
  github: string;
}

export interface IWelcomeComponentProps {
  handleClick: () => void;
}
