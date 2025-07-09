import { Server } from "socket.io";

class SocketService{
    private _io: Server;

    constructor() {
        console.log("Initializing SocketService...");
        this._io = new Server(
            {
                cors: {
                    origin: '*', // Adjust this to your frontend URL
                    // methods: ["GET", "POST"],
                    allowedHeaders: ["*"],
                    // credentials: true,
                },
            }
    );
        
    }

    public initListeners() {

        const io = this.io;

        console.log("Setting up Socket.IO listeners...");

        io.on("connect", (socket) => {
            console.log(`New client connected: ${socket.id}`);

            socket.on("event:message", async ({ message }: { message: string }) => {
                console.log(`Message received: ${message}`);

                // Add more event listeners as needed
            })
        }
    )
     }
    

    get io() {
        return this._io;
    }
}

export default new SocketService();