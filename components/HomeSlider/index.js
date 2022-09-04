import styled from "styled-components";

import NextLink from "next/link";
import NextImage from "next/image";
import FooterNav from "../Footer/FooterNav";

const HomeSlider = ({ currentImage, index, nextImage, previousImage }) => {
  return (
    <CardBody>
      {currentImage.map((image, imageIndex) => {
        const { id, largeURL, title, services, content, subtitle } = image;

        let opacity = 0;
        let transform = "0";

        if (imageIndex === index) {
          opacity = 1;
        }
        if (
          imageIndex === index - 1 ||
          (index === 0 && imageIndex === currentImage.length - 1)
        ) {
          transform = "100%";
        }
        if (
          imageIndex === index + 1 ||
          (index === 0 && imageIndex === currentImage.length + 1)
        ) {
          transform = "-100%";
        }

        return (
          <Card key={id} opacity={opacity} transform={transform}>
            <CardContainer>
              <Image
                src={`/images/slider/${largeURL}.png`}
                alt={title}
                layout='fill'
                objectFit='cover'
              />
              <OverlayLeft opacity={opacity} transform={transform} />
            </CardContainer>
            <CardHeader>
              <CardSubTitle>
                <span />
                {services}
              </CardSubTitle>
              <CardTitle>
                {title}
                <br />
                {subtitle}
              </CardTitle>
              <ProjectDetail>{content}</ProjectDetail>
              <StyledNextLink href='/projects'>
                <Button>All Project</Button>
              </StyledNextLink>
            </CardHeader>
          </Card>
        );
      })}

      <FooterNav previousImage={previousImage} nextImage={nextImage} />
    </CardBody>
  );
};

export default HomeSlider;
const Image = styled(NextImage)`
  width: 100%;
  height: 100%;
  transition: all 0.9s ease-in-out;
`;
const StyledNextLink = styled(NextLink)``;

const Button = styled.button`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: ${(props) => props.theme.fontWeight.xl};
  border: 1px solid gray;
  border-radius: 8px;
  padding: 22px 40px;
  margin-right: 10px;
  transition: 900ms ease-in-out;
  cursor: pointer;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.white};
  :hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.black};
  }
  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.sm};
    font-weight: ${(props) => props.theme.fontWeight.sm};
    padding: 12px 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: ${(props) => props.theme.fontSize.sm};
    font-weight: ${(props) => props.theme.fontWeight.sm};
    padding: 12px 20px;
  }
`;

const CardSubTitle = styled.h2`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: ${(props) => props.theme.fontWeight.xl};
  display: flex;
  align-items: center;
  height: 100%;
  text-transform: uppercase;
  margin-bottom: 20px;
  > span {
    height: 4px;
    width: 50px;
    background-color: ${(props) => props.theme.colors.blue};
    margin-right: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: ${(props) => props.theme.fontWeight.md};
    color: ${(props) => props.theme.colors.white};
  }
  @media screen and (max-width: 480px) {
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: ${(props) => props.theme.fontWeight.md};
    color: ${(props) => props.theme.colors.white};
  }
`;
const ProjectDetail = styled.p`
  display: flex;
  flex-direction: row;
  max-width: 400px;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontWeight.sm};
  @media screen and (max-width: 768px) {
    color: ${(props) => props.theme.colors.white};
  }
  @media screen and (max-width: 480px) {
    color: ${(props) => props.theme.colors.white};
  }
`;
const CardTitle = styled.h1`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.xll};
  font-weight: ${(props) => props.theme.fontWeight.xll};
  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.xxxl};
    font-weight: ${(props) => props.theme.fontWeight.xxxl};
    color: ${(props) => props.theme.colors.white};
  }
  @media screen and (max-width: 480px) {
    font-size: ${(props) => props.theme.fontSize.xxxl};
    font-weight: ${(props) => props.theme.fontWeight.xxxl};
    color: ${(props) => props.theme.colors.white};
  }
`;
const CardBody = styled.div``;

const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${({ opacity }) => opacity};
  transition: all 0.8s ease-in-out;
  transform: translateX(${({ transform }) => transform});
`;

const OverlayLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 40%;
  opacity: ${({ opacity }) => opacity};
  transition: all 0.5s ease-in;
  transform: translateX(${({ transform }) => transform});
  background-color: white;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const CardContainer = styled.div``;

const CardHeader = styled.header`
  position: absolute;
  top: 50%;
  left: 60px;
  right: 0;
  @media screen and (max-width: 768px) {
    left: 10px;
  }
  @media screen and (max-width: 480px) {
    left: 10px;
  }
`;
