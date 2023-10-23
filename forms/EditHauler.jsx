import { useParams } from "react-router-dom";

export const EditHauler = () => {
  const { haulerId } = useParams();
  return <div>Hello {haulerId}</div>;
};
