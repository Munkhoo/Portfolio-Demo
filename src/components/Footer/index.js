import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FooterContainer, SocialIcon, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        PORTFOLIO
                    </SocialLogo>
                    <WebsiteRights>Munkhoo Ⓒ {new Date().getFullYear()}</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="//www.facebook.com/monkhkhuuleg.monkhuule" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="//www.instagram.com/monkhoo601/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="//www.linkedin.com/in/munkhkhuleg-tserenpurev-7ab113184/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                            <FaLinkedin />
                        </SocialIconLink> 
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer