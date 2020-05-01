const add = (a, b) => a + b;
const generateGreetings = (name = "Anonymous") => `Hello ${name}!`

test('Should add two number', () => {

    const result = add (3, 4);
    expect(result).toBe(7);
})

test('Should greet', () => {
    const result = generateGreetings('Harish');
    expect(result).toBe('Hello Harish!');
})

test("Should greet no name user", () => {
    const result = generateGreetings();
    expect(result).toBe("Hello Anonymous!")
} )