function HTMLActuator() {
  this.tileContainer = document.querySelector(".tile-container");
}

HTMLActuator.prototype.clearContainer = function(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

HTMLActuator.prototype.addTile = function(tile) {
  var wrapper       = document.createElement("div");
  var inner         = document.createElement("div");
  var positionClass = this.positionClass(tile);

  var classes = ["tile", positionClass];

  if (tile.winner) classes.push("tile-winner");

  this.applyClasses(wrapper, classes);
  this.applyClasses(inner, ["tile-inner"]);

  wrapper.appendChild(inner);

  this.tileContainer.appendChild(wrapper);
};

HTMLActuator.prototype.applyClasses = function(element, classes) {
  element.setAttribute("class", classes.join(" "));
};

HTMLActuator.prototype.positionClass = function(tile) {
  return "tile-position-" + (tile.x + 1) + "-" + (tile.y + 1);
};