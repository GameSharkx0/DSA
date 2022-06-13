let m = new Map();
m.set(1, 100);
m.set(2, true);
m.set("apple", 45);

for (t of m.values()){
    console.log(t);
}
console.log(m);
m.delete("apple");
console.log(m);