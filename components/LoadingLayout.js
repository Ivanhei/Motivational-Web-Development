import { LoadingIcon } from '@/assets/Icons';

export default function LoadingLayout() {
  return <div className="px-40 lg:px-60 xl:px-80 text-center">
    <LoadingIcon 
      style={{
        width: "100%",
        maxWidth: "72px",
        display: "inline-block"
      }}/>
  </div>;
}
