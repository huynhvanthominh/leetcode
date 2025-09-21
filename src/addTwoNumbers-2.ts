class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function a(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const list: (ListNode | null)[] = [];
  let prev = 0;


  let temp = l1;

  while (l2) {
    let node: ListNode | null = null;
    let memory = 0;
    while (l1) {
      const sum = (l1.val ?? 0) * (l2.val ?? 0) + memory;
      const digit = sum % 10;
      memory = Math.floor(sum / 10)
      node = new ListNode(digit, node);
      l1 = l1.next;
    }
    list.push(node);
    l2 = l2.next;
    l1 = new ListNode(0, temp);
    prev++;
  }
  console.log(list.reduce((prev, item) => {
    console.log(item);
    return null
  }, null as (ListNode | null)));
  return null;
  return list.reduce((prev, item): ListNode | null => {
    return addTwoNumbers(prev, item)
  }, null);
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let rs = new ListNode();
  let carry = 0;
  while (carry || l1 || l2) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    const digit = sum % 10;
    carry = Math.floor(sum / 10);
    rs.next = new ListNode(digit);
    rs = rs.next;
  }
  return rs;
}


function addTwoNumbersV1(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let rs: ListNode | null = null;
  let memory = 0;
  while ((l1?.val || l1?.val === 0) || l2?.val || l2?.val === 0 || memory > 0) {
    const v1 = l1?.val ?? 0;
    const v2 = l2?.val ?? 0;
    const sum = v1 + v2 + memory;
    const numer = sum % 10;
    rs = new ListNode(numer, rs)

    memory = Math.floor(sum / 10);
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }
  return revertList(rs);
};


function handleAddNode(numbers: number[]): ListNode | null {
  let rs = new ListNode();
  if (numbers.length === 0) return rs;
  rs.val = numbers[0];
  const length = numbers.length;
  let i = 1;
  while (i < length) {
    const val = numbers[i];
    rs = new ListNode(val, rs)
    i++
  }
  return revertList(rs);
}

function revertList(data: ListNode | null): ListNode | null {
  let rs: ListNode | null = null;
  while (data?.val || data?.val === 0) {
    const val = data.val;
    rs = new ListNode(val, rs);
    data = data.next;
  }
  return rs;
}


/*
 * node.val = 1, node.next = null
 * node.val = 1, node.next = (node.val = 2, node.next = null)
 * node.val = 1, node.next = (node.val = 2, node.next = (node.value = 3, node.next = null ))
  */

const l1 = handleAddNode([2, 3])
const l2 = handleAddNode([1, 2])

function handleLog(node: ListNode | null, values: number[]): number[] {
  if (!node) {
    return values;
  }
  return handleLog(node.next, [...values, node.val])
}

const rs = a(l1, l2)
console.log(handleLog(rs, []))
