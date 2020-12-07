import React, {PureComponent} from 'react';
import {Container, Image, Menu, Visibility} from "semantic-ui-react";
import {fixedMenuStyle, menuStyle} from "../helpers/styleHelper";
import {Link} from "react-router-dom";

class Header extends PureComponent {
    stickTopMenu = () => this.setState({menuFixed: true});
    unStickTopMenu = () => this.setState({menuFixed: null});

    state = {
        menuFixed: null,
        overlayFixed: false,
    }

    render() {
        const {menuFixed} = this.state;

        return (
            <div>
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed ? 'top' : undefined}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container text>
                            <Menu.Item>
                                <Image size='mini' src='https://semantic-ui.com/examples/assets/images/logo.png' />
                            </Menu.Item>
                            <Menu.Item header>Neslihanın Blogu</Menu.Item>
                            <Menu.Item as={Link} to="/movies">Yazılar</Menu.Item>
                            <Menu.Item as='a'>Yazı Ekle</Menu.Item>
                        </Container>
                    </Menu>
                </Visibility>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;