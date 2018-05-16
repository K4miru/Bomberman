module.exports = function (mongoose) {

    // dla skrócenia późniejszej pisowni 

    var Schema = mongoose.Schema;

    // przykładowy schemat podatnika
    // zawiera niezbędne informacje na temat struktury tworzonego dokumentu
    // zwłaszcza : typ danych, czy pole jest wymagane, wartości domyślne, ew zakres

    var podatnikSchema = new Schema(
        {
            imie: { type: String, required: true },
            nazwisko: { type: String, required: true },
            podatek: { type: Number, default: 0 },
            alive: { type: Boolean, default: false },
            age: { type: Number, required: true, min: 13, max: 120 }
        });

    var BoxSchema = new Schema({
        ID: { type: Number, default: 0},
        X: { type: Number, default: 0 },
        Z: { type: Number, default: 0 }
    });
    var BonusBoxSchema = new Schema({
        ID: { type: Number, default: 0 },
        X: { type: Number, default: 0 },
        Z: { type: Number, default: 0 },
        num: { type: Number, default: 0 }
    });
    // obiekt który chcemy wyeksportować z tego pliku
    // może zawierać więcej niż jeden model,
    // co jest zakomentowane

    var models = {
        Box: mongoose.model("Box", BoxSchema),
        BonusBox: mongoose.model("BonusBox", BonusBoxSchema),
        //Podatnik: mongoose.model("Podatnik", podatnikSchema),
        //Kierowca: mongoose.model("Kierowca", kierowcaSchema) , 
        // Inny: mongoose.model("Inny", innySchema) ,   
    }

    return models;

}