module.exports = function () {
    var opers = {

        
        // wstawienie jednego "rekordu" do dokumentu - INSERT

        InsertOne: function (data) {
            data.save(function (error, data, dodanych) {
                //console.log("Dodano " + data)
            })
        },

        // pobranie wszystkich "rekordów" z dokumentu - SELECT
        // zwracamy uwagę na argument Model

        SelectAll: function (Model, callback) {

            Model.find({}, function (err, data) {
                if (err) return console.error(err);
                callback(data);
            })
            
        },


        //pobranie z ograniczeniem ilości i warunkiem - WHERE, LIMIT

        SelectByX: function (Model, X, count) {
            Model.find({ X: X }, function (err, data) {
                if (err) return console.error(err);
                console.log(data);
            }).limit(count)
        },

        //aktualizacja - np zamiana imienia - UPDATE

        UpdateImie: function (Model, oldName, newName) {
            Model.update({ imie: oldName }, { imie: newName }, function (err, data) {
                if (err) return console.error(err);
                console.log(data);
            })
        },

        UpdateKlocek: function (Model, id, username, X,Y,Z,Length,Color,Rotate) {
            Model.update({ ID: id, User: username }, { X: X, Y:Y, Z:Z, Length:Length, Color:Color, Rotate:Rotate }, function (err, data) {
                if (err) return console.error(err);
                console.log(data);
            })
        },


        //usuniecie danych - DELETE

        DeleteAll: function (Model) {
            Model.remove(function (err, data) {
                if (err) return console.error(err);
                console.log(data);
            })
        },

        // pozostałe niezbędne operacje trzeba sobie dopisać samemu, 
        // na podstawie dokumentacji Mongoose
    }

    return opers;

}