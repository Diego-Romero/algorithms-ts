
const input = [
  { type: 'phone', color: 'gold' },
  { type: 'phone', color: 'red' },
  { type: 'computer', color: 'red' },
  { type: 'phone', color: 'red', brand: 'mac  ' },
]

const filters = [
  { color: 'gold' },
];

// avoid n * m
function filterInput(array: any[]): any[] {
  /**
   * { color: set('gold', 'red'), type: set('phone')  }
   *  */  
  return array;
}

// stand my ground regarding asking clarifying questions, have the specifications pinned down. .
// consider the naive approach, is better to finish it in a naive way, than not finishing it elegantly.