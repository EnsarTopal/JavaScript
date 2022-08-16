function a() {
    let büyükbaba = 'büyükbaba';
    return function b() {
        let baba = 'baba';
        return function c() {
            let ogul = 'oğul';
            return '${büyükbaba} → ${baba} → ${ogul}'
        }
    }
}

console.log(a()()())

const one = a();

