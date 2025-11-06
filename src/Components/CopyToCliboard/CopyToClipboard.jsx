import { useState, useEffect } from "react";

export default function CopyToClipboard({ hexCode }) {
  const [copy, setCopy] = useState(false);
  async function writeClipboardText() {
    try {
      await navigator.clipboard.writeText(hexCode);
      setCopy(true);
    } catch (error) {
      console.error(error.message);
    }
  }
  //this is to copy hex and cleanup after 3000ms (3sec)
  useEffect(() => {
    if (copy) {
      const timeOut = setTimeout(() => setCopy(false), 3000);
      return () => clearTimeout(timeOut);
    }
  }, [copy]);

  return (
    <>
      <button onClick={writeClipboardText}>Copy</button>
      {copy && <p>Copied to Clipboard</p>}
    </>
  );
}
