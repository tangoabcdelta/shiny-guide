import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Image = styled.img`
  display: block;
  height: 100px;
  width: 100px;
`;
const placeHolder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

const LazyImageStatic = (props) => {
  return (
    <img
      src={props.src || placeHolder}
      height={props.height || "100px"}
      width={props.width || "100px"}
      alt={props.alt || "..."}
    />
  );
};

const LazyImage = (props) => {
  const [imageSrc, setImageSrc] = useState(placeHolder);
  const [imageRef, setImageRef] = useState();
  const { src } = props;

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc === placeHolder) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // when image is visible in the viewport + rootMargin
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: "75%",
          }
        );
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      // on component unmount, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageSrc, imageRef, src]);

  return (
    <img
      src={imageSrc}
      height={props.height || "100px"}
      width={props.width || "100px"}
      alt={props.alt || "..."}
      ref={setImageRef}
    />
  );
};

export { Image, LazyImageStatic, LazyImage };
export default LazyImage;

/* <React.Fragment></React.Fragment> */
