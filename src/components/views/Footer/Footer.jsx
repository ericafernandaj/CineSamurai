import React from "react";
import { StyleFooter } from "./Footer.style";
import {
  MapPin,
  LinkedinLogo,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react";
import { tema } from "../../../style/theme";
const Footer = () => {
  return (
    <StyleFooter>
      <div className="rodape">
        <section className="localização-icone">
          <MapPin
            className="map"
            color={tema.white50}
            size={20}
            weight="fill"
          />
          <p className="nome-rua-rodape">
            Rua Qualquer, 123, Cidade QualquerCuritiba-PR
          </p>
        </section>

        <section className="icones">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo color={tema.white50} size={40} weight="fill" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogo color={tema.white50} size={40} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookLogo color={tema.white50} size={40} />
          </a>
        </section>
        <section className="contato">
          <h3>Fale conosco</h3>
          <p>(41) 3456-7890</p>
          <p>ola@grandesite.com.br</p>
        </section>
      </div>
    </StyleFooter>
  );
};

export default Footer;
