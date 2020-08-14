// WORKSPACE:
// queue to rollercoast
// queue starts from 1 at front to n at end
// a person can swap with the person in front of them (bribe)
// after swapping the sticker stays the same
// each person can only swap forward twice at mose
//  example: if n = 8 and person 5 bribe person 4 the
//    queue becomes: 1, 2, 3, 5, 4, 6, 7, 8
//   minimum number of bribes took place to get the queue in its current state

// Cases:
// 1- check if the element !== index(i) + 1  => means move on, the person hasn't bribed
// 2-
//  a) check for 1 bribe
//  b) check for 2 bribes
//  c) default 'Too chaotic'

const minimumBribesWORKSPACE = (q) => {
  const re_arrange = (arr, x, y) => {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  };
  
  let bribeCount = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    // check if the element not in its position
    if (q[i] !== i + 1) {
      // check if the person bribed once
      if (i - 1 >= 0 && q[i - 1] === i + 1) {
        bribeCount += 1;
        re_arrange(q, i, i - 1);
      } // check if the person bribed twice
      else if (i - 2 >= 0 && q[i - 2] === i + 1) {
        bribeCount += 2;
        re_arrange(q, i - 2, i - 1);
        re_arrange(q, i - 1, i);
      } // if not the above two cases the 'Too chaotic'
      else {
        console.log('Too chaotic');
        return;
      }
    }
  }

  console.log(bribeCount);
  // const originalState = [...q].sort((a, b) => a - b);
  // const originalQueue = {};
  // originalState.map((person, sticker) => (originalQueue[person] = sticker));
  // console.log('originalQueue: ', originalQueue);
  // console.log('originalState: ', originalState);
  // console.log('currentQueue: ', q);
  // let bribeCounter = 0;
  // for (let i = 0; i < q.length; i++) {
  //   if (originalQueue[q[i]] > i) {
  //     console.log(`originalQueue: ${originalQueue[q[i]]}: currentQueue: ${i}`);
  //     console.log('briber: ', q[i]);
  //     const numberOfBribes = originalQueue[q[i]] - i;
  //     console.log('numberOfBribes: ', numberOfBribes);
  //     if (numberOfBribes > 2) {
  //       console.log('Too chaotic');
  //       return;
  //     }

  //     bribeCounter += numberOfBribes;
  //   }
  //   if (originalQueue[q[i]] < i) {
  //     for (let j = i + 1; j < q.length; j++) {
  //       if (q[i] > q[j]) {
  //         bribeCounter += 1;
  //       }
  //     }
  //   }
  // }

  // console.log(bribeCounter);
};

// const input1 = [2, 1, 5, 3, 4]; // output 3
// const input1 = [1, 5, 4, 2, 3]; // output 3
const input2 = [2, 5, 1, 3, 4]; // Too chaotic

const input = [1, 2, 5, 3, 7, 8, 6, 4];
// minimumBribesWORKSPACE(input1);
minimumBribesWORKSPACE(input);

