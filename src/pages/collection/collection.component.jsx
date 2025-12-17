import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import "./collection.styles.scss";

const CollectionPage = () => {
  const { collectionId } = useParams(); // Get collectionId from URL params
  const { title, items } = useSelector((state) =>
    selectCollection(collectionId)(state)
  ); // Use useSelector to access the collection

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      {/* Render collection items if available */}
      <div className="items">
        {items &&
          items.map((item) => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default CollectionPage;
