import { useState } from "react";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import usePattern from "../../hooks/usePattern";

export default function Thumbnail({ patternID, thumbnailOptions }) {
  const [ready, setReady] = useState(false);
  const { urlSize, style, maxHeight, placeholderStyle } = thumbnailOptions;
  const pattern = usePattern(patternID);

  function getUrl(pattern) {
    return Object.values(pattern.photos)[0]?.[urlSize];
  }

  return (
    <ReactPlaceholder
      showLoadingAnimation
      type="rect"
      ready={ready}
      style={placeholderStyle}
    >
      <div style={{ maxHeight: maxHeight, overflow: "hidden" }}>
        {pattern?.photos && (
          <img
            onLoad={setReady(true)}
            src={getUrl(pattern)}
            key={pattern.id}
            style={style}
            sizes="100vw"
            alt={`Image of pattern ${pattern.id}`}
          />
        )}
      </div>
    </ReactPlaceholder>
  );
}
