import { Link } from 'react-router-dom';

function Breadcrumb({ brandName, product }) {
  return (
    <div>
      <Link to="/">Home</Link> &gt;{" "}
      <Link to={`/brand/${brandName}`}>Brand</Link> &gt;{" "}
      <Link to={`/brand/${brandName}`}>{brandName}</Link> &gt;{" "}
      <span>
        {product.name} ({product.color}, {product.ram} + {product.storage})
      </span>
    </div>
  );
}

export default Breadcrumb;
