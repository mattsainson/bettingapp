router.get("/simulator", function (req, res) {    
    function runBets(){
    db.Bet.create({
        userId: 1,
        gameId: 1,
        teamId: 1,
        betType: 'Spread',
        wager: 200
    });

    db.Bet.create({
        userId: 1,
        gameId: 2,
        teamId: 2,
        betType: 'Spread',
        wager: 100
    });

    db.Bet.create({
        userId: 1,
        gameId: 3,
        teamId: 1,
        betType: 'Moneyline',
        wager: 300
    });

    db.BetTransaction.create({
        userId: 1,
        betId: 1,
        transactionAt: '2019-05-11T12:18:34.100Z',
        transactionAmount: 100
    });

    db.BetTransaction.create({
        userId: 1,
        betId: 2,
        transactionAt: '2019-05-12T12:18:34.100Z',
        transactionAmount: 100
    });

    db.BetTransaction.create({
        userId: 1,
        betId: 3,
        transactionAt: '2019-05-13T12:18:34.100Z',
        transactionAmount: 100
    });
};

// function createUsers(){
//     db.User.create({
//         email: 'mattsainson@gmail.com',
//         password: 'password',
//         name: 'Matt',
//         balance: 1500,
//         isActive: true
//     });

//     db.User.create({
//         email: 'kyle@gmail.com',
//         password: 'password',
//         name: 'Kyle',
//         balance: 2433,
//         isActive: true
//     });

//     db.User.create({
//         email: 'lovdeep@gmail.com',
//         password: 'password',
//         name: 'Lovdeep',
//         balance: 433,
//         isActive: true
//     });
//     }
// });

    // db.Game.create({
    //     sport: 'Basketball',
    //     league: 'NBA',
    //     gameAt: '2019-05-11T12:18:34.100Z',
    //     state: 'Scheduled'
    // });
    // db.Team.create({
    //     gameId: 1,
    //     name: 'Kings',
    //     home: true,
    //     spread: 5,
    //     spreadPayout: 110,
    //     moneylinePayout: 180,
    //     score: 0
    // });
    // db.Team.create({
    //     gameId: 1,
    //     name: 'Warriors',
    //     home: false,
    //     spread: -5,
    //     spreadPayout: -110,
    //     moneylinePayout: -180,
    //     score: 0
    // });

    // db.Game.create({
    //     sport: 'Basketball',
    //     league: 'NBA',
    //     gameAt: '2019-05-10T12:18:34.100Z',
    //     state: 'Started'
    // });
    // db.Team.create({
    //     gameId: 2,
    //     name: 'Celtics',
    //     home: false,
    //     spread: 12,
    //     spreadPayout: 120,
    //     moneylinePayout: 160,
    //     score: 56
    // });
    // db.Team.create({
    //     gameId: 2,
    //     name: 'Lakers',
    //     home: true,
    //     spread: -12,
    //     spreadPayout: -120,
    //     moneylinePayout: -155,
    //     score: 32
    // });

    // db.Game.create({
    //     sport: 'Basketball',
    //     league: 'NBA',
    //     gameAt: '2019-05-09T12:18:34.100Z',
    //     state: 'Ended'
    // });
    // db.Team.create({
    //     gameId: 3,
    //     name: 'Bulls',
    //     home: true,
    //     spread: -6,
    //     spreadPayout: -130,
    //     moneylinePayout: -160,
    //     score: 102
    // });
    // db.Team.create({
    //     gameId: 3,
    //     name: 'Sixers',
    //     home: false,
    //     spread: 6,
    //     spreadPayout: 130,
    //     moneylinePayout: 145,
    //     score: 87
    // });

    