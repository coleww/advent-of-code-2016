var input = ["R3", "L2", "L2", "R4", "L1", "R2", "R3", "R4", "L2", "R4", "L2", "L5", "L1", "R5", "R2", "R2", "L1", "R4", "R1", "L5", "L3", "R4", "R3", "R1", "L1", "L5", "L4", "L2", "R5", "L3", "L4", "R3", "R1", "L3", "R1", "L3", "R3", "L4", "R2", "R5", "L190", "R2", "L3", "R47", "R4", "L3", "R78", "L1", "R3", "R190", "R4", "L3", "R4", "R2", "R5", "R3", "R4", "R3", "L1", "L4", "R3", "L4", "R1", "L4", "L5", "R3", "L3", "L4", "R1", "R2", "L4", "L3", "R3", "R3", "L2", "L5", "R1", "L4", "L1", "R5", "L5", "R1", "R5", "L4", "R2", "L2", "R1", "L5", "L4", "R4", "R4", "R3", "R2", "R3", "L1", "R4", "R5", "L2", "L5", "L4", "L1", "R4", "L4", "R4", "L4", "R1", "R5", "L1", "R1", "L5", "R5", "R1", "R1", "L3", "L1", "R4", "L1", "L4", "L4", "L3", "R1", "R4", "R1", "R1", "R2", "L5", "L2", "R4", "L1", "R3", "L5", "L2", "R5", "L4", "R5", "L5", "R3", "R4", "L3", "L3", "L2", "R2", "L5", "L5", "R3", "R4", "R3", "R4", "R3", "R1"]


function getFirstRepeatPosition (path) {
  var facing = "N"
  var position = [0, 0]
  var visited = []
  var firstRepeat
  path.some((next) => {
    var coords = next.split(/(L|R)/)
    var dir = coords[1]
    var dist = +coords[2]
    var newestPosition
    facing = getNewDirection(facing, dir)
    var newPositions = updatePosition(position, facing, dist)
    position = newPositions[newPositions.length - 1]
    var isRepeat = visited.some((oldPosition) => {
      return newPositions.some((newPosition) => {
        newestPosition = newPosition

        return oldPosition[0] === newPosition[0] && oldPosition[1] === newPosition[1]
      })

    })
    visited = visited.concat(newPositions)
    if (isRepeat) {
      firstRepeat = newestPosition
    }

    return isRepeat
  })


  return firstRepeat
}


function getEndPosition (path) {
  var facing = "N"
  return path.reduce((position, next) => {
    var coords = next.split(/(L|R)/)
    var dir = coords[1]
    var dist = +coords[2]
    facing = getNewDirection(facing, dir)
    return updatePosition(position, facing, dist)
  }, [0, 0])
}

function getNewDirection (facing, dir) {
  var directions = ["N", "E", "S", "W"]
  var newDirIndex
  if (dir === "L") {
    newDirIndex = directions.indexOf(facing) - 1
    if (newDirIndex < 0) newDirIndex = 3
  } else {
    newDirIndex = directions.indexOf(facing) + 1
    if (newDirIndex > 3) newDirIndex = 0
  }
  return directions[newDirIndex]
}

function updatePosition (positionYeah, facing, dist) {
  var position = positionYeah.slice(0)
  var positions = []
  for (var i = 0; i < dist; i++) {
    switch (facing) {
      case "N":
        position[1] -= 1
        break;
      case "E":
        position[0] += 1
        break;
      case "S":
        position[1] += 1
        break;
      case "W":
        position[0] -= 1
        break;
    }
    positions.push(position.slice(0))
  }

  return positions
}

var endPosition = getFirstRepeatPosition(input)
console.log(endPosition)
console.log(Math.abs(endPosition[0]) + Math.abs(endPosition[1]))
// console.log(getNewDirection("N", "R"), "E")
// console.log(getNewDirection("N", "L"), "W")
// console.log(getNewDirection("W", "R"), "N")
// console.log(getNewDirection("W", "L"), "S")


// console.log(updatePosition([0, 0], "N", 1), [0, 1])

// console.log(updatePosition([0, 0], "E", 1), [1, 0])

// console.log(updatePosition([0, 0], "S", 1), [0, -1])

// console.log(updatePosition([0, 0], "W", 1), [-1, 0])

// console.log(getEndPosition(["R2", "L3"]), [2, -3])