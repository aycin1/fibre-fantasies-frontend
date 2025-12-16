import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { Link } from "react-router";
import usePattern from "../../hooks/usePattern";
import Thumbnail from "../Thumbnail/Thumbnail";

export default function PatternCard({ patternID, thumbnailOptions, hideName }) {
  const name = usePattern(patternID)?.name;
  const noName = hideName && { display: "none" };

  return (
    <div
      style={{
        margin: "0vh 0vw 0vh",
        overflow: "hidden",
      }}
    >
      <ReactPlaceholder
        showLoadingAnimation
        type="text"
        ready={!!name}
        rows={1}
        style={{ ...noName, paddingBottom: "25px", paddingTop: "5px" }}
      >
        <p style={{ fontSize: "small", ...noName }}>{name}</p>
      </ReactPlaceholder>

      <Link to={`/pattern/${patternID}`}>
        <Thumbnail patternID={patternID} thumbnailOptions={thumbnailOptions} />
      </Link>
    </div>
  );
}
