import styled from "styled-components";
import { Link } from "react-router-dom";

const GradientLinkButton = styled(Link)`
  background: linear-gradient(to right, #8456ec, #e87bf8);
  color: white;
  font-weight: bold;
  padding: 12px 18px;
  display: inline-block;
  border-radius: 0.5rem;
  border: none;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: white;
  }
`;

export default GradientLinkButton;
