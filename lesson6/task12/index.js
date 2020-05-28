function withdraw(clients, balances, client, amount){
    let i = 0;
    for(; i < clients.length; ++i){
        if(clients[i] === client){
            break;
        }
    }

    balances[i] -= amount;
    console.log(balances);
    return balances[i] > 0 ? balances[i] : -1;
}