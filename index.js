document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // Store the commands
  const movesContainer = document.querySelector("#moves-container")

  document.addEventListener("keydown", arrowKey)

  function arrowKey(event) {
    if (event.key === "ArrowLeft") {
      const leftArrow = document.createElement("li")
      leftArrow.textContent = "Left"
      movesContainer.append(leftArrow)
    } else if (event.key === "ArrowUp") {
      const upArrow = document.createElement("li")
      upArrow.textContent = "Up"
      movesContainer.append(upArrow)
    } else if (event.key === "ArrowRight") {
      const rightArrow = document.createElement("li")
      rightArrow.textContent = "Right"
      movesContainer.append(rightArrow)
    } else if (event.key === "ArrowDown") {
      const downArrow = document.createElement("li")
      downArrow.textContent = "Down"
      movesContainer.append(downArrow)
    }
  }

  // Move the robot
  const moveButton = document.querySelector("#move-button")

  moveButton.addEventListener("click", moveRobot)

  function moveRobot() {
    const newDirection = document.querySelector("li")
    move(newDirection.textContent.toLowerCase())
    newDirection.remove()
  }

  // Delete a move
  movesContainer.addEventListener("click", moveDeleter)

  function moveDeleter(event) {
    if (event.target.matches("li")) {
      event.target.remove()
    }
  }
});
