import { memo } from "react";
import { ImageContents } from "./ImageContents";
export const Main = memo(({ urls }) => {
  return (
    <main>
      {urls &&
        urls.map((url, index) => {
          return <ImageContents key={url} index={index} url={url} />;
        })}
    </main>
  );
});
