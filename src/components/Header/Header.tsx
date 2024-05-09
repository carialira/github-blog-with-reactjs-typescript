import { HeaderContainer } from "./Header.styles";
import bgHeader from "../../assets/img/bg-cover.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={bgHeader} alt="" className="header-img"/>
    </HeaderContainer>
  );
}
