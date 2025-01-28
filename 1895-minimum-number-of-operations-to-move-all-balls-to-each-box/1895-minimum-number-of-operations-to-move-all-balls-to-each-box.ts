function minOperations(boxes: string): number[] {
    const hasBall = [];
    const minOperations = [];
    for (const index in Object(boxes)) {
        if (boxes[index] === '1') {
            hasBall.push(parseInt(index));
        }
    }

    for (let i = 0; i < boxes.length; i++) {
        let move = 0;
        for (let j = 0; j < hasBall.length; j++) {
            move += Math.abs(i-hasBall[j])
        }
        minOperations.push(move);
    }
    return minOperations;
};