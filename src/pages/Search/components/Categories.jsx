import { useEffect, useState } from "react";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import styles from "../Search.module.css";
import Checkbox from "./Checkbox";

export default function Categories({ handleChange }) {
  const [categories, setCategories] = useState();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function fetchCategories() {
      try {
        const response = await axiosPrivate.get("/patterns/categories", {
          signal: controller.signal,
        });
        isMounted && setCategories(response?.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategories();
    return () => {
      isMounted = false;
      isMounted && controller.abort();
    };
  }, [axiosPrivate]);

  function sortCategories(categories) {
    const transformCategories = (cat) => {
      const node = { value: cat.permalink, label: cat.name };
      const children = cat.children.map((child) => transformCategories(child));

      if (children.length > 0) {
        node.children = children;
      }
      return node;
    };
    return categories.map(transformCategories);
  }

  return (
    <div className={styles.categories}>
      <h4>Categories</h4>
      {categories && (
        <Checkbox
          node={sortCategories(categories)}
          value="pc"
          handleChange={handleChange}
          expandAll={true}
        />
      )}
    </div>
  );
}
