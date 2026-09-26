// UNCG Campus Events - Save Event feature
// Adds a Save Event button to every event card on page load, and keeps a
// live "Saved Events" summary list at the bottom of the home page in sync.

document.addEventListener("DOMContentLoaded", function () {

  const main = document.querySelector("main");

  // ---- Build the Saved Events summary section and add it to the page ----

  const savedSection = document.createElement("section");
  savedSection.id = "saved-events-section";

  const savedHeading = document.createElement("h2");
  savedHeading.textContent = "Saved Events";

  const noSavedMessage = document.createElement("p");
  noSavedMessage.id = "no-saved-message";
  noSavedMessage.textContent = "No events saved yet.";

  const savedList = document.createElement("ul");
  savedList.id = "saved-events-list";

  savedSection.appendChild(savedHeading);
  savedSection.appendChild(noSavedMessage);
  savedSection.appendChild(savedList);
  main.appendChild(savedSection);

  // Show the "no events saved" message only when the list is empty
  function updateNoSavedMessage() {
    if (savedList.children.length === 0) {
      noSavedMessage.classList.remove("hidden");
    } else {
      noSavedMessage.classList.add("hidden");
    }
  }

  // ---- Add a Save Event button to every upcoming event card ----

  const eventCards = document.querySelectorAll("#upcoming-events .event-card");

  eventCards.forEach(function (card) {
    const cardContent = card.querySelector(".event-card-content");

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save Event";
    saveButton.classList.add("save-btn");
    cardContent.appendChild(saveButton);

    // Keep a reference to this card's row in the summary list, if saved
    let listItem = null;

    saveButton.addEventListener("click", function () {
      const isSaved = card.classList.toggle("saved");

      if (isSaved) {
        // Save the event: update the button, then build its summary row
        saveButton.textContent = "Remove Event";

        const name = card.querySelector("h3").textContent;
        const dateTime = card.querySelector("time").textContent;
        const firstParagraph = cardContent.querySelector("p");
        const location = firstParagraph.lastChild.textContent.trim();

        listItem = document.createElement("li");
        listItem.classList.add("saved-event-item");

        const nameEl = document.createElement("strong");
        nameEl.textContent = name;

        const detailsEl = document.createElement("span");
        detailsEl.textContent = dateTime + " - " + location;

        listItem.appendChild(nameEl);
        listItem.appendChild(document.createElement("br"));
        listItem.appendChild(detailsEl);

        savedList.appendChild(listItem);

      } else {
        // Remove the event: reset the button and drop its summary row
        saveButton.textContent = "Save Event";

        if (listItem) {
          savedList.removeChild(listItem);
          listItem = null;
        }
      }

      updateNoSavedMessage();
    });
  });

  updateNoSavedMessage();

});