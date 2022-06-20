class dbObject {
    key;
    value;
    autoIncrement;
    pk;
    fk;
    nomeTabela;
    
    constructor(key, value, autoIncrement = null, pk = null, fk = null, nomeTabela = null) {
        this.key = key;
        this.value = value;
        this.autoIncrement = autoIncrement ?? false;
        this.pk = pk;
        this.fk = fk;
        this.nomeTabela = nomeTabela;
    }
}

module.exports = dbObject;