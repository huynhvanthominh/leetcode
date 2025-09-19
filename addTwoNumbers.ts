class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const rs = new ListNode();
  return rs;
};


function handleAddNode(numbers: number[]): ListNode {
  let rs = new ListNode();
  let last = new ListNode();
  let i = numbers.length - 1;
  while (i >= 0) {
    const item = numbers[i];
    const temp = last;
    last.val = item;
    last.next = temp;
    rs.next = last;
    i--;
  }
  return rs;
}


/*
 * node.val = 1, node.next = null
 * node.val = 1, node.next = (node.val = 2, node.next = null)
 * node.val = 1, node.next = (node.val = 2, node.next = (node.value = 3, node.next = null ))
  */
console.log(handleAddNode([1, 2, 3]))
process.stdin.resume(); // keeps the process running
