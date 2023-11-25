function receivesAFunction(name) {
    return name()
}

const goat = nombre => "Ronaldo";

function returnsANamedFunction() {
    return goat
};

function returnsAnAnonymousFunction() {
    return () => {
        return "Properties of anonymous function"
    };
};