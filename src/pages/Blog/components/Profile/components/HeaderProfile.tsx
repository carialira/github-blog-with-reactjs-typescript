import { HeaderProfileContainer } from './HeaderProfile.styles'

interface HeaderProfileProps{
  name: string | undefined;
}

export function HeaderProfile({name}: HeaderProfileProps) {
  return (
    <HeaderProfileContainer>
      <h1>{name}</h1>
      <a href="#" target="_blank">
        GITHUB <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </HeaderProfileContainer>
  );
}
