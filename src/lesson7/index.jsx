import React, { Component } from "react";
import SideBar from "./components/SideBar";
import Body from "./components/Body";
import { Container, Wrapper, Category, Icons, Input, User } from "./style";
import logo from "./assets/imgs/logo.png";
import user from "./assets/imgs/user.jpg";
import { data } from "./utils/mock";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }
  render() {
    let res = null;
    const onFilter = ({ target: { value } }) => {
      res = data.filter((v) =>
        v.title.toLowerCase().includes(value.toLowerCase())
      );
    };

    const onSearch = () => {
      this.setState({ data: res });
    };

    return (
      <React.StrictMode>
        <Container>
          <Wrapper>
            <Category>
              <Icons.Burger />
              <Icons.Logo src={logo} />
            </Category>
            <Category>
              <Input placeholder="search" onChange={onFilter} />
              <Icons.Search onClick={onSearch} />
            </Category>
            <Category end="true">
              <Icons.Video />
              <Icons.Menu />
              <Icons.Bell />
              <User src={user} />
            </Category>
          </Wrapper>
          <Container flex="true">
            <SideBar />
            <Body data={this.state.data} />
          </Container>
        </Container>
      </React.StrictMode>
    );
  }
}
