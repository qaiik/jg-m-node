class mstoh {
  constructor() {
  }
  
  propertyExists(method) {
    let rv = false
    let split = method.split("::")
    if (!globalThis[split[0]]) return false
    let start = globalThis[split[0]]
    rv = true
    split.shift()
    for (const prop of split) {
      if (!start[prop]) return false
      start = start[prop]
    } 
    return rv
  }
  
   existsqGetprop(method) {
    let rv = false
    let split = method.split("::")
    if (!globalThis[split[0]]) return false
    let start = globalThis[split[0]]
    rv = true
    split.shift()
    for (const prop of split) {
      if (!start[prop]) return false
      start = start[prop]
    } 
    return start
  }
  
  eqCall(method, ...args) {
    if (this.propertyExists(method)) {
      let m = this.existsqGetprop(method)
      m(...args)
    } 
  }
}

let checks = new mstoh()
