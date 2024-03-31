import { Triangle, Puff, ThreeDots } from "react-loader-spinner";
import "./LoadingComponent.css";

export const LoadingComponent = () => {
  return (
    <div className="loading-animation">
      <ThreeDots visible={true} height="80" width="80" color="#40e0d0" ariaLabel="triangle-loading" wrapperStyle={{}} wrapperClass="" />
    </div>
  );
};
