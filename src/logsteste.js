function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function log() {
    const json = '{"level":"info", "message":"Olá Meetup Aracaju, esse é um teste de log."}';
    const obj = JSON.parse(json);
    while (true) {
        console.log(json);
        await delay(5 * 1000);
    }
    console.log('Done');
}

log();