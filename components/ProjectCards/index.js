import { useEffect } from "react";
import NextImage from "next/image";

import styled from "styled-components";

import "photoswipe/style.css";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { motion } from "framer-motion";

export default function ProjectCards({ ...props }) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [props.galleryID]);

  return (
    <ProjectCard
      className='pswp-gallery'
      id={props.galleryID}
      animate={{ opacity: 1, translateY: -50 }}
      initial={{ opacity: 0, translateY: 0 }}
      transition={{ duration: 0.3, delay: props.i * 0.2 }}
    >
      <ProjectArticle>
        <header>
          <figure>
            <a
              data-pswp-width={props.width}
              data-pswp-height={props.height}
              key={props.galleryID + "-" + props.id}
              href={`/images/${props.thumbnailURL}.jpg`}
              target='_blank'
              rel='noreferrer'
            >
              <NextImage
                src={`/images/${props.thumbnailURL}.jpg`}
                alt={props.title}
                height={props.height}
                width={props.width}
                layout={"intrinsic"}
              />
            </a>
          </figure>
          <h2>{props.title}</h2>
          <p>{props.category}</p>
        </header>
      </ProjectArticle>
    </ProjectCard>
  );
}

const ProjectArticle = styled.article`
  margin-bottom: 1.333rem;
  transition: transform 600ms ease;

  &:hover {
    transform: translateY(-10px);
  }
  header {
    cursor: pointer;
    display: inline-block;

    figure {
      margin: 0;
      margin-bottom: 0.666rem;
      img {
        object-fit: cover;
        max-width: 60rem;
      }
    }
    h2 {
      margin: 0;
      color: ${(props) => props.theme.colors.antrasite};
      font-size: ${(props) => props.theme.fontSize.smm};
      line-height: ${(props) => props.theme.fontLineHeight.smm};
      font-weight: ${(props) => props.theme.fontWeight.xs};
      margin-bottom: 0.0875em;
    }
    p {
      margin: 0;
      color: ${(props) => props.theme.colors.antrasite};
      font-size: ${(props) => props.theme.fontSize.smm};
      line-height: ${(props) => props.theme.fontLineHeight.smm};
      font-weight: ${(props) => props.theme.fontWeight.xs};
    }
  }
`;
const ProjectCard = styled(motion.div)`
  margin: 0.5rem;
`;
