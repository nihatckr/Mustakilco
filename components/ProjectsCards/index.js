import React from "react";
import { projects } from "../data";
import ProjectCards from "../ProjectCards";

const ProjectsCards = () => {
  return (
    <>
      {projects.map((item, i) => {
        const {
          id,
          subtitle,
          galleryID,
          height,
          width,
          largeURL,
          thumbnailURL,
          title,
          category,
        } = item;
        return (
          <ProjectCards
            key={id}
            galleryID={galleryID}
            height={height}
            subtitle={subtitle}
            width={width}
            category={category}
            largeURL={largeURL}
            thumbnailURL={thumbnailURL}
            title={title}
            i={i}
          />
        );
      })}
    </>
  );
};

export default ProjectsCards;
