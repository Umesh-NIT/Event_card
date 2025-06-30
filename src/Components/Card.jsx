import React from "react";
import "./Card.css";

export const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  buttonIcon,
  buttonIcon2,
  link,
}) => {
  return (
    <div className="card-container">
      {imgSrc && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}

      <div className="card-content">
        {title && <h1 className="card-title">{title}</h1>}
        {description && <p className="card-description">{description}</p>}
        <div className="card-buttons">
          {buttonText && link && (
            <a href={link} className="card-btn">
              {buttonText}
            </a>
          )}
          {buttonIcon && link && (
            <a href={link} className="btn">
              {buttonIcon}
            </a>
          )}
          {buttonIcon2 && link && (
            <a href={link} className="btn">
              {buttonIcon2}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
