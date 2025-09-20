document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("textarea");
  const featureFlag = document.getElementById("feature-flag");

  function HandlerTxtSave() {
    if (featureFlag.checked) {
      setTimeout(() => {
        localStorage.setItem("autosave-data", textarea.value);
      }, 1000);
    } else {
      const getLocalStorageData = localStorage.getItem("autosave-data");
      textarea.value = getLocalStorageData;
    }
  }
  featureFlag.addEventListener("click", HandlerTxtSave);
  const getLocalStorageData = localStorage.getItem("autosave-data");
  textarea.value = getLocalStorageData;

  textarea.addEventListener("input", () => {
    if (featureFlag.checked) {
      localStorage.setItem("autosave-data", textarea.value);
    }
  });
});

//Other Approch

/*
    document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("textarea");
  const featureFlag = document.getElementById("feature-flag");

  // Load previously saved data from localStorage
  const savedData = localStorage.getItem("autosave-data");
  if (savedData) {
    textarea.value = savedData;
  }

  let autosaveInterval;

  // Handler for the feature-flag checkbox
  featureFlag.addEventListener("change", () => {
    if (featureFlag.checked) {
      // Start autosave
      autosaveInterval = setInterval(() => {
        localStorage.setItem("autosave-data", textarea.value);
      }, 1000);
    } else {
      // Stop autosave
      clearInterval(autosaveInterval);
    }
  });

  // Save data to localStorage immediately when the feature is enabled
  textarea.addEventListener("input", () => {
    if (featureFlag.checked) {
      localStorage.setItem("autosave-data", textarea.value);
    }
  });
});
*/
