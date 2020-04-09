class X {
  constructor(...data) {
    [this.name, this.age] = data
  }
}

let ordins = [
  new X('hi', 200),
  new X('cat', 300)
]

