import Layout from "../layout/Layout";

import { useParams } from "react-router-dom";

const AdvertDetail = (props) => {
  const { advertsId } = useParams();

  return (
    <Layout {...props}>
      <div>Adverts Detail {advertsId}</div>
    </Layout>
  );
};

export default AdvertDetail;
