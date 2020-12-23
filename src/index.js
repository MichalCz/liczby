const mongo = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';
const dbname = 'baza';

mongo.connect(url, {useUnifiedTopology: true}, (error, client) => {
    if (error) {
        throw Error('cos nie tak');
    }

    const db = client.db(dbname).collection('liczby');

    const dropCollection = async () => {
        await db.drop();
    }

    // const count = () => {
    //     db.countDocuments().then((res) => console.log(res));
    // }

    // const findLast = () => {
    //     db.find().limit(1).sort({ $natural: -1 }).toArray((err, res) => console.log(res));
    // }

    const list = (value) => ({
        numbers: value
    });

    const addOne = (value) => {
        db.insertOne(list(value));
    }


    dropCollection()
    // count()
    // findLast();

    for (let a = 1; a <= 44; ++a) {

        for (let b = 2; b <= 45; ++b) {
            if (b <= a) continue;

            for (let c = 3; c <= 46; ++c) {
                if (c <= b) continue;

                for (let d = 4; d <= 47; ++d) {
                    if (d <= c) continue;

                    for (let e = 5; e <= 48; ++e) {
                        if (e <= d) continue;

                        for (let f = 6; f <= 49; ++f) {
                            
                            if (f <= e) continue;
                            addOne([a, b, c, d, e, f]);
                        } // loop f
                    } // loop e
                } // loop d
            } // loop c
        } // loop b
    } // loop a

    console.log('koniec')
})