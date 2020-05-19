import storesData from "./storesData";
import StoresList from "./StoresList/StoresList";

const Stores = () => {
  return (
    <StoresList
      stores={storesData}
    />
  )
}

export default Stores