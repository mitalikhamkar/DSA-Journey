var maximumWealth = function(accounts) {
    let MaxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        let wealth = 0;

        for (let j = 0; j < accounts[i].length; j++) {
            wealth = wealth + accounts[i][j];
        }

        if (wealth > MaxWealth) {
            MaxWealth = wealth;
        }
    }

    return MaxWealth;
};
