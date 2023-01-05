import { useState } from "react";
//
export default function NavStyle() {
  const [colorItem1, setColorItem1] = useState("grey");
  const [colorItem2, setColorItem2] = useState("grey");
  const [colorItem3, setColorItem3] = useState("grey");
  const [borderItem1, setBorderItem1] = useState("#202020");
  const [borderItem2, setBorderItem2] = useState("#202020");
  const [borderItem3, setBorderItem3] = useState("#202020");

  //
  const handleNav = (navIsActive) => {
    if (navIsActive === "Characters") {
      setColorItem1("white");
      setColorItem2("grey");
      setColorItem3("grey");
      setBorderItem1("#e6232a");
      setBorderItem2("#202020");
      setBorderItem3("#202020");
    }
    if (navIsActive === "Comics") {
      setColorItem1("grey");
      setColorItem2("white");
      setColorItem3("grey");
      setBorderItem1("#202020");
      setBorderItem2("#e6232a");
      setBorderItem3("#202020");
    }
    if (navIsActive === "Favorites") {
      setColorItem1("grey");
      setColorItem2("grey");
      setColorItem3("white");
      setBorderItem1("#202020");
      setBorderItem2("#202020");
      setBorderItem3("#e6232a");
    }
  };
}
