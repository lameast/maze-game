const shuffleArray = (array) => {
    //Randomly shuffle array
    //Source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    const arr = array.slice(0);

    for (let i = arr.length - 1; i > 0; i-- ){
        const j = Math.floor(Math.random()*(i+1));
        [arr[i], arr[j]] = [arr[j], [arr[i]]]
    }

    return arr;
}

const mazeCreator = (size) => {
    //Iterative randomized DFS from https://en.wikipedia.org/wiki/Maze_generation_algorithm
    const mazeSize = size*3;
    const maze = new Array(mazeSize).fill(new Array(mazeSize).fill(0));
    const stack = [[1,1]];
    const directions = [[-2, 0], [0, -2], [2, 0], [0, 2]];

    while (stack.length > 0){
        let currentPosition = stack.pop();

        for(const dir of shuffleArray(directions)){

            let x = currentPosition[0] + dir[0];
            let y = currentPosition[1] + dir[1];

            if (0 < x < mazeSize-1 && 0 < y < mazeSize-1){
                stack.push(currentPosition);
                maze[x][y] = 1;
                stack.push([x,y]);
                break;
            }
        }
    } 
    return maze;
};

export default mazeCreator;