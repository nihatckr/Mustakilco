import styled, { keyframes } from "styled-components";
import dynamic from "next/dynamic";

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100vw;
  height: 800px;
  z-index: 1;
`;
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 800px;
  overflow: hidden;
`;
const HeroContent = styled.div`
  position: absolute;
  display: flex;
  max-width: 1200px;
  height: 100%;
  flex-direction: column;
  z-index: 3;
`;

const BgOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <BgOverlay />
        <ImageBg src={"/Sanal_Gerceklik.mp4"} autoPlay loop muted />
      </HeroBg>
      <HeroContent>
        <HeroWrapper>
          <HeroTexWrapper>
            <HeroHeading>
              Mekan, zaman ve insanı ortak bir yaşam zemininde kurgulayarak
              deneyim tasarlıyoruz
            </HeroHeading>
          </HeroTexWrapper>
          <HeroIconWrapper>
            <HeroIcon>
              <IconDot />
            </HeroIcon>
          </HeroIconWrapper>
        </HeroWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;
const HeroTexWrapper = styled.div`
  display: flex;

  margin: auto 40px;
`;
const HeroIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const HeroHeading = styled.h1`
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
  max-width: 1000px;
  color: white;
  z-index: 2;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 28px;
    margin-top: 180px;
  }
`;

const heartBeat = keyframes`
  0%
  {
    transform:translateY(20px);
  } 
  50%
  {
    transform: translateY(-20px);
  } 
  100%
  {
    transform: translateY(20px);
  }
`;

const HeroIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 30px;
  border: 2px solid white;
  border-radius: 30px;
`;
const IconDot = styled.div`
  height: 10px;
  width: 10px;
  border: 5px solid white;
  border-radius: 5px;
  animation-name: ${heartBeat};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;
const ImageBg = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
