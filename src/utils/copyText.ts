(() => {
  const copyBtns: NodeList | null = document.querySelectorAll("#copy-btn");
  const copyNodes: NodeList | null = document.querySelectorAll("#code-node");
  const copyBtnsTerminal: NodeList | null =
    document.querySelectorAll("#copy-btn-terminal");
  const copyNodesTerminal: NodeList | null = document.querySelectorAll(
    "#code-node-terminal",
  );
  const copyIconHolder: NodeList | null =
    document.querySelectorAll("#copy-icon-holder");
  const copyIconHolderTerminal: NodeList | null = document.querySelectorAll(
    "#copy-icon-holder-for-terminal",
  );
  const copyIcon = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
  >
      <g fill="none">
          <path
              d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
          ></path>
          <path
              fill="currentColor"
              d="M19 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2V4a2 2 0 0 1 2-2zm-9 13H8a1 1 0 0 0-.117 1.993L8 17h2a1 1 0 0 0 .117-1.993zm9-11H9v2h6a2 2 0 0 1 2 2v8h2zm-7 7H8a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2"
          ></path>
      </g>
  </svg>`;
  const copy2Icon = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
  >
      <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.5"
          d="M6 15h-.6C4.07 15 3 13.93 3 12.6V5.4C3 4.07 4.07 3 5.4 3h7.2C13.93 3 15 4.07 15 5.4V6m-3.6 3h7.2a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4h-7.2A2.4 2.4 0 0 1 9 18.6v-7.2A2.4 2.4 0 0 1 11.4 9"
      ></path>
  </svg>`;
  console.log({
    code: copyIconHolder,
    terminal: copyIconHolderTerminal,
  });
  function handleIcon(iconHolder: NodeList, index: number, icon: string) {
    if (iconHolder) {
      (iconHolder[index] as HTMLElement).innerHTML =
        "<span class='text-emerald-500'>Copied!</span>";
      setTimeout(() => {
        (iconHolder[index] as HTMLElement).innerHTML = icon;
      }, 1000);
    }
  }
  const fallbackCopyText = (
    text: string,
    index: number,
    iconHolder: NodeList,
    icon: string,
  ) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      handleIcon(iconHolder, index, icon);
    } catch (err) {
      console.error("Fallback copy failed:", err);
    } finally {
      document.body.removeChild(textArea);
    }
  };
  const copyText = (
    text: string,
    index: number,
    iconHolder: NodeList,
    icon: string,
  ) => {
    try {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          console.log("Text Copied: " + text);
          handleIcon(iconHolder, index, icon);
        })
        .catch((error) => console.error("Copy failed:", error));
    } catch (error) {
      console.error(error);
    }
  };
  if (copyBtns && copyNodes) {
    copyBtns.forEach((btn, index: number) => {
      btn.addEventListener("click", () => {
        if (navigator.clipboard) {
          copyText(
            copyNodes[index]?.textContent?.trim() || "",
            index,
            copyIconHolder,
            copyIcon,
          );
        } else {
          fallbackCopyText(
            copyNodes[index]?.textContent?.trim() || "",
            index,
            copyIconHolder,
            copyIcon,
          );
        }
      });
    });
  }
  if (copyBtnsTerminal && copyNodesTerminal) {
    copyBtnsTerminal.forEach((btn, index: number) => {
      btn.addEventListener("click", () => {
        if (navigator.clipboard) {
          copyText(
            copyNodesTerminal[index]?.textContent?.trim() || "",
            index,
            copyIconHolderTerminal,
            copy2Icon,
          );
        } else {
          fallbackCopyText(
            copyNodesTerminal[index]?.textContent?.trim() || "",
            index,
            copyIconHolderTerminal,
            copy2Icon,
          );
        }
      });
    });
  }
})();
