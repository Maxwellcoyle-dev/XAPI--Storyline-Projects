function sendStatement(verb, verbId, object, objectId) {
    const player = GetPlayer();
    const uNamejs = player.GetVar("uName");
    const uEmailjs = player.GetVar("uEmail");


    Const conf = {
        "endpoint" : "https://maxhendersonelearning.lrs.io/xapi/",
        "auth": `Basic${toBase64("osunis:pogimu")}`
    }
    ADL.XAPIWrapper.changeConfig(conf);

    const statement = {
        "actor": {
            "name":uNamejs,
            "mbox": "mailto:" + uEmailjs
            "objectType": "Agent"
        },
        "verb": {
            "id": verbId, 
            "display": {"en-us": verb}
            },
        "object": {
            "id": objectId,
            "definition": {
                    "name": {"en-us":object}
         }

        }
    }
    const result = ADL.XAPIWrapper.sendStatement(statement);
}
