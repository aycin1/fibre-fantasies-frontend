import Dropdown from "../../../components/Dropdown/Dropdown";
import PatternCard from "../../../components/PatternCard/PatternCard";
import styles from "../Search.module.css";

export default function SearchResults({ list }) {
  const thumbnailOptions = {
    urlSize: "medium_url",
    style: {
      width: "100%",
      height: "auto",
      maxWidth: "200px",
      minWidth: "200px",
      overflow: "hidden",
      padding: "10px",
    },
    maxHeight: "200px",
    placeholderStyle: { width: 200, height: 200 },
  };

  return (
    <div className={styles.searchResults}>
      {list?.length ? (
        list.map((pattern) => (
          <div className={styles.pattern} key={pattern}>
            <PatternCard
              patternID={pattern}
              thumbnailOptions={thumbnailOptions}
            />
            <div className={styles.dropdown}>
              <Dropdown patternID={pattern} />
            </div>
          </div>
        ))
      ) : (
        <span>
          No patterns found. Have you tried widening your search?
          <br />
          <p style={{ fontSize: "small" }}>(At the top of the sidebar)</p>
        </span>
      )}
    </div>
  );
}
