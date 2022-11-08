import { useEffect } from "react";

const useTitle = title => {
  useEffect(() => {
    document.title = `${title} - Legal Network`;
  }, [title]);
};

export default useTitle;