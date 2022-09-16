import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <>

      <Box>
        <Container>
          <Row>
            <Column>
              <FooterLink href="https://www.facebook.com/anakingmsr/">
                {' '}
                <FaFacebookF />
              </FooterLink>
            </Column>
            <Column>
              <FooterLink href="https://github.com/MohamedHamdy94">
                {' '}
                <FaGithub />
              </FooterLink>
            </Column>
            <Column>
              <FooterLink href="https://www.linkedin.com/in/mohamed-hamdy-ahmed-mohamed-138693219/">
                {' '}
                <BsLinkedin />
              </FooterLink>
            </Column>

          </Row>

        </Container>
        <div className="text-center text-white p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
    © 2022 Copyright : 
    <a className="text-reset text-light fw-bold" href="https://github.com/MohamedHamdy94"> MohamedHamdy94</a>
  </div>
      </Box>
    </>

  );
};

export default Footer;
