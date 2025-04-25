import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

function Product() {
  const { brandName, productId } = useParams();

  // Simulated product data
  const product = {
    name: "Itel A50C",
    color: "Misty Aqua",
    ram: "2GB",
    storage: "32GB"
  };

  return (
    <div>
      <Breadcrumb brandName={brandName} product={product} />
      <h1>{product.name} - {product.color}, {product.ram} + {product.storage}</h1>
    </div>
  );
}

export default Product;
