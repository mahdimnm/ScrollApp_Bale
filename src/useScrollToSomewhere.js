import { useCallback } from "react";

function useScrollToSomewhere(ref) {
  const scrollToSomeWhere = useCallback(() => {
    const refrence = typeof ref === "number" ? ref : ref.current.offsetTop;
    window.scrollTo(0, refrence);
  }, [ref]);

  return scrollToSomeWhere;
}

export default useScrollToSomewhere;
