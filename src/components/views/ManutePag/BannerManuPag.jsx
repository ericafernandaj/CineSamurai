import React from "react";
import { StyleManuPag } from "../../views/ManutePag/BannerManuPag.style";
import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";

const BannerManuPag = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Pagamentos');
  };

  return (
    <StyleManuPag>
      <div>
        <p>Estamos em Manutenção</p>
        <img className="img-manu" src="" alt="" srcSet="" />
      </div>
      <Button texto="Voltar" variant="primary" onClick={handleClick} />
    </StyleManuPag>
  );
};

export default BannerManuPag;