import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const data = [
  { id: 1, name: "jasurbek" },
  { id: 2, name: "eshmat" },
  { id: 3, name: "toshmat" },
  { id: 4, name: "xolmat" },
  { id: 5, name: "gulmat" },
  { id: 6, name: "pulmat" },
];

const index = () => {
  const params = useParams();

  const [selected, setSelected] = useState({});

  useEffect(() => {
    let res = data.filter((v) => v.id == params.id);
    setSelected(...res);
  }, [params.id]);

  return (
    <React.Fragment>
      <h1>Single</h1>
      <h1>
        {selected?.id} - {selected?.name}
      </h1>
    </React.Fragment>
  );
};

export default index;
