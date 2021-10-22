import { memo } from "react";
import { Main } from "./Main";
import { Header } from "./Header";
export const Contents = memo(({ urls }) => {
  return (
    <>
      <Header />
      <Main urls={urls} />
    </>
  );
});
