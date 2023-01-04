const shuffleArray = (array) => {
    //Randomly shuffle array
    //Source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    const arr = array.slice(0).map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
    return arr;
}

const mazeCreator = (size) => {
    //Iterative randomized DFS from https://en.wikipedia.org/wiki/Maze_generation_algorithm
    const mazeSize = size*3;
    //const maze = new Array(mazeSize).fill().map(() => new Array(mazeSize).fill(0));
    const maze = new Array(mazeSize).fill().map(() => new Array(mazeSize).fill(0));
    const stack = [[1,1]];
    const directions = [[-2, 0], [0, -2], [2, 0], [0, 2]];
    maze[1][1] = 1;
    console.log(maze)
    while (stack.length > 0){
        let currentPosition = stack.pop();
        const shuffledArray = shuffleArray(directions);
        for(let i = 0; i < shuffledArray.length; i++){
            let dirX = shuffledArray[i][0];
            let dirY = shuffledArray[i][1]
            let x = currentPosition[0] + dirX;
            let y = currentPosition[1] + dirY;
            
            if (x > 0 && x < mazeSize-1 && y > 0 && y < mazeSize-1 && maze[x][y] === 0){
                
                stack.push(currentPosition);
                maze[x][y] = 1;
                console.log(x,y);
                if(dirX > 0){
                    maze[x - 1][y] = 1;
                }else if (dirX < 0){
                    maze[x + 1][y] = 1;
                }
                else if (dirY > 0){
                    maze[x][y - 1] = 1;
                }
                else if (dirY < 0){
                    maze[x][y + 1] = 1;
                }
                stack.push([x,y]);
                break;
            } 
        }
    } 
    return maze;
};

export default mazeCreator;