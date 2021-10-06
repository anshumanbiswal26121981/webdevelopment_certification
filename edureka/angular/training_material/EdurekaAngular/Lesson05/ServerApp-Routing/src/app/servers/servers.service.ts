//returns servers array and updates it.
export class ServersService {
  
    private servers = [ //servers json data
        {
          id: 1,
          name: 'Productionserver',
          status: 'online'
        },
        {
          id: 2,
          name: 'Testserver',
          status: 'offline'
        },
        {
          id: 3,
          name: 'Devserver',
          status: 'offline'
        }
    ];
  
    getServers() { //returns json array
      return this.servers;
    }
  
    getServer(id: number) { //returns specific server record based on the id
      const server = this.servers.find(
        (s) => {
          return s.id === id;
        }
      );
      return server;
    }
  
    updateServer(id: number, serverInfo: {name: string, status: string}) { //updates server record based on the name
      const server = this.servers.find(
        (s) => {
          return s.id === id;
        }
      );
      if (server) {
        server.name = serverInfo.name;
        server.status = serverInfo.status;
      }
    }
  }
  