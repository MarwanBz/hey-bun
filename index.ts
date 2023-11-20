import figlet from "figlet";
const HeyBun = "Hey   from   Wsl   Bun   Server!  MarwanBz"
const server = Bun.serve({
  fetch() {
    const body = figlet.textSync(HeyBun);
    return new Response(body);  
    return new Response("Hey from Wsl Bun!");
  },
  port: 3001,
});