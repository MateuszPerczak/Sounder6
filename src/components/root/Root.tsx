import { Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useApi } from "@/hooks";

import AnimatedOutlet from "../animatedOutlet/AnimatedOutlet";
import Controls from "../controls/Controls";
import Nav from "../nav/Nav";

const Root = (): JSX.Element => {
  const navigate = useNavigate();
  const { showDevTools } = useApi();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent): void => {
      if (e.key === "F12") {
        e.preventDefault();
        showDevTools();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return (): void => window.removeEventListener("keypress", handleKeyPress);
  }, []);

  useEffect(() => {
    navigate("/library");
  }, []);

  return (
    <>
      <main>
        <Nav />
        <Suspense fallback={<></>}>
          <AnimatedOutlet />
        </Suspense>
      </main>
      <Controls />
    </>
  );
};

export default Root;
