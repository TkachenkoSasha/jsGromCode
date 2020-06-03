function withdraw(clients,  balances, client,  amount){
    let clientID = clients.findIndex(el => client === el);
    if(clientID !== -1){
        return balances[clientID] - amount > 0 ? 
        balances[clientID] - amount : -1;
    }

    return -1;
}